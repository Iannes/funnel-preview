import Image from "next/image";

import { calculateImageSize } from "utils/calculateImageSize";
import { DeviceDimensions, ImageBlock as ImageBlockType } from "types";

type ImageBlockProps = {
  block: ImageBlockType;
  width?: number;
  height?: number;
};

export const ImageBlock = ({ block }: ImageBlockProps) => {
  const { width, height } = calculateImageSize(DeviceDimensions.width);

  return (
    <div className="m-auto shadow-xl">
      <Image
        style={{ backgroundColor: "#0c4a6e" }}
        className="rounded"
        src={block.src}
        alt=""
        width={width}
        height={height}
        loading="eager"
      />
    </div>
  );
};
