import Image from "next/image";

type ImageProps = {
  imageSource: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  layout?: "fill" | "fixed" | "intrinsic" | "responsive";
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  objectPosition?: string;
  priority?: boolean;
  loading?: "eager" | "lazy";
  blurDataURL?: string;
  placeholder?: string;
};

type HeaderProps = {
  heading: string;
  imageClassnames?: string;
};

type Props = HeaderProps & ImageProps;

export const Header = ({
  heading,
  imageWidth,
  imageHeight,
  imageSource,
  imageAlt,
}: Props) => (
  <>
    <nav className="flex items-center justify-between flex-wrap bg-sky-900 py-6 px-10 h-[100px]">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Image
          src={imageSource}
          width={imageWidth}
          height={imageHeight}
          alt={imageAlt ?? ""}
          loading="eager"
        />
      </div>

      <h1 className="flex-grow flex items-center w-auto text-white font-medium text-lg md:text-3xl">
        {heading}
      </h1>
    </nav>
  </>
);
