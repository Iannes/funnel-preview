import classNames from "classnames";
import { TextBlock as TextBlockType } from "types";

type TextBlockProps = {
  block: TextBlockType;
};

const classes = classNames(
  "mx-auto",
  "max-w-md",
  "sm:max-w-xl",
  "w-full",
  "md:max-w-3xl",
  "lg:max-w-4xl",
  "p-4",
  "text-2xl",
  "font-semibold",
  "break-words",
  "my-4",
  "text-3xl"
);

export const TextBlock = ({ block }: TextBlockProps) => {
  return (
    <div
      className={classes}
      style={{
        color: block.color,
        textAlign: block.align,
      }}
    >
      {block.text}
    </div>
  );
};
