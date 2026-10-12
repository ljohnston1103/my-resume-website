import Image from "next/image";
import { firstImage } from "../_lib/publicFiles";

// A real cover when one exists; otherwise a plain document tile that reads as
// a document, not as invented cover art. Covers sit next to their titles, so
// the image itself carries no alt text.
export default function Cover({ candidates, title, kind, sizes = "200px", preload = false, className = "" }) {
  const image = firstImage(candidates);

  if (image) {
    return (
      <span className={`cover ${className}`.trim()}>
        <Image
          src={image.src}
          alt=""
          width={image.width}
          height={image.height}
          sizes={sizes}
          preload={preload}
        />
      </span>
    );
  }

  return (
    <span className={`cover coverTile ${className}`.trim()} aria-hidden="true">
      <span className="coverTileKind">{kind}</span>
      <span className="coverTileTitle">{title}</span>
    </span>
  );
}
