const textEncoder = new TextEncoder();

export const AUTH_COOKIE = "lj_site_access";
export const AUTH_PASSWORD = "1611";
export const COOKIE_MAX_AGE = 60 * 60 * 24 * 30;

const COOKIE_SECRET = "dr-luke-johnston-site-access-v1";
const TOKEN_MAX_AGE_MS = COOKIE_MAX_AGE * 1000;

async function getSigningKey() {
  return crypto.subtle.importKey(
    "raw",
    textEncoder.encode(COOKIE_SECRET),
    {
      name: "HMAC",
      hash: "SHA-256",
    },
    false,
    ["sign"],
  );
}

function toBase64Url(buffer) {
  const bytes = new Uint8Array(buffer);

  if (typeof Buffer !== "undefined") {
    return Buffer.from(bytes)
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/g, "");
  }

  let binary = "";

  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }

  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

async function signValue(value) {
  const key = await getSigningKey();
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    textEncoder.encode(value),
  );

  return toBase64Url(signature);
}

export async function createAuthToken() {
  const issuedAt = Date.now().toString();

  return `${issuedAt}.${await signValue(issuedAt)}`;
}

export async function verifyAuthToken(token) {
  if (typeof token !== "string") {
    return false;
  }

  const [issuedAt, signature, ...extraParts] = token.split(".");

  if (!issuedAt || !signature || extraParts.length > 0 || !/^\d+$/.test(issuedAt)) {
    return false;
  }

  const age = Date.now() - Number(issuedAt);

  if (age < 0 || age > TOKEN_MAX_AGE_MS) {
    return false;
  }

  const expectedSignature = await signValue(issuedAt);

  return signature === expectedSignature;
}

export function isValidPassword(password) {
  return typeof password === "string" && password === AUTH_PASSWORD;
}

export function normalizeRedirectPath(value) {
  if (typeof value !== "string" || value.length === 0) {
    return "/";
  }

  if (!value.startsWith("/") || value.startsWith("//")) {
    return "/";
  }

  return value;
}
