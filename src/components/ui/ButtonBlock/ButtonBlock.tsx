import React from "react";
import classNames from "classnames";
import { isValidColor } from "utils/isValidColor";

import { ButtonBlock as ButtonBlockType } from "types";

type ButtonBlockProps = {
  block: ButtonBlockType;
};

enum FallbackColors {
  defaultBgColor = "#0076FF",
  defaultTextColor = "white",
}

export const ButtonBlock = ({ block }: ButtonBlockProps) => {
  const validBgColor = isValidColor(block.bgColor)
    ? block.bgColor
    : FallbackColors.defaultBgColor;
  const validTextColor = isValidColor(block.color)
    ? block.color
    : FallbackColors.defaultTextColor;

  const classes = classNames(
    "py-4",
    "px-2",
    "m-4",
    "rounded-md",
    "mx-auto",
    "max-w-md",
    "cursor-pointer",
    "border-none",
    "w-full",
    "box-border",
    "transition",
    "text-center",
    "transform",
    "text-2xl"
  );

  return (
    <div className="mt-2 mb-2">
      <button
        style={{ background: validBgColor, color: validTextColor }}
        className={classes}
      >
        {block.text}
      </button>
    </div>
  );
};
