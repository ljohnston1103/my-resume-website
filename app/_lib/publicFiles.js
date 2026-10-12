// Build-time checks against files in public/. Pages are statically rendered,
// so this runs once during `next build`: a button or image appears only when
// its file is really there, and image proportions come from the file itself.
//
// Server-only. Do not import from a "use client" component.

import fs from "node:fs";
import path from "node:path";

const PUBLIC_DIR = path.join(/* turbopackIgnore: true */ process.cwd(), "public");

// If public/ cannot be read (an unusual runtime), assume files are present
// rather than hiding every download.
const CAN_CHECK = (() => {
  try {
    return fs.statSync(PUBLIC_DIR).isDirectory();
  } catch {
    return false;
  }
})();

function resolve(publicPath) {
  const clean = decodeURI(publicPath.split(/[?#]/)[0]);
  const full = path.join(PUBLIC_DIR, clean);
  return full.startsWith(PUBLIC_DIR) ? full : null;
}

// { href, bytes } when the file exists, otherwise null.
export function fileInfo(publicPath) {
  if (!publicPath) return null;
  if (!CAN_CHECK) return { href: publicPath, bytes: null };
  const full = resolve(publicPath);
  if (!full) return null;
  try {
    const stat = fs.statSync(full);
    return stat.isFile() && stat.size > 0 ? { href: publicPath, bytes: stat.size } : null;
  } catch {
    return null;
  }
}

export function formatBytes(bytes) {
  if (!bytes) return null;
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

// Width and height from a JPEG, PNG, or WebP header.
function readDimensions(buffer) {
  // PNG
  if (buffer.length > 24 && buffer.readUInt32BE(0) === 0x89504e47) {
    return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
  }
  // JPEG: walk the markers to the first start-of-frame
  if (buffer[0] === 0xff && buffer[1] === 0xd8) {
    let offset = 2;
    while (offset + 9 < buffer.length) {
      if (buffer[offset] !== 0xff) {
        offset += 1;
        continue;
      }
      const marker = buffer[offset + 1];
      if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) {
        offset += 2;
        continue;
      }
      const length = buffer.readUInt16BE(offset + 2);
      const isFrame =
        marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;
      if (isFrame) {
        return { height: buffer.readUInt16BE(offset + 5), width: buffer.readUInt16BE(offset + 7) };
      }
      offset += 2 + length;
    }
    return null;
  }
  // WebP
  if (buffer.toString("ascii", 0, 4) === "RIFF" && buffer.toString("ascii", 8, 12) === "WEBP") {
    const chunk = buffer.toString("ascii", 12, 16);
    if (chunk === "VP8X") {
      return { width: 1 + buffer.readUIntLE(24, 3), height: 1 + buffer.readUIntLE(27, 3) };
    }
    if (chunk === "VP8 ") {
      return { width: buffer.readUInt16LE(26) & 0x3fff, height: buffer.readUInt16LE(28) & 0x3fff };
    }
    if (chunk === "VP8L") {
      const bits = buffer.readUInt32LE(21);
      return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
    }
  }
  return null;
}

// First image in the list that exists: { src, width, height }, or null.
export function firstImage(candidates = []) {
  for (const src of candidates) {
    if (!src) continue;
    if (!CAN_CHECK) return { src, width: 800, height: 1000 };
    const full = resolve(src);
    if (!full) continue;
    try {
      const fd = fs.openSync(full, "r");
      const buffer = Buffer.alloc(256 * 1024);
      const read = fs.readSync(fd, buffer, 0, buffer.length, 0);
      fs.closeSync(fd);
      const size = readDimensions(buffer.subarray(0, read));
      if (size?.width && size?.height) return { src, ...size };
    } catch {
      // try the next candidate
    }
  }
  return null;
}
