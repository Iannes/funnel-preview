import {
  Block,
  ButtonBlock,
  FunnelData,
  ImageBlock,
  ListBlock,
  ListItem,
  Page,
  TextBlock,
} from "types";

export function isValidFunnelData(data: any): data is FunnelData {
  return (
    typeof data === "object" &&
    data !== null &&
    typeof data.name === "string" &&
    typeof data.bgColor === "string" &&
    Array.isArray(data.pages) &&
    data.pages.every(isValidPage)
  );
}

function isValidPage(data: any): data is Page {
  return (
    typeof data === "object" &&
    data !== null &&
    typeof data.id === "string" &&
    Array.isArray(data.blocks) &&
    data.blocks.every(isValidBlock)
  );
}

function isValidBlock(data: any): data is Block {
  return (
    typeof data === "object" &&
    data !== null &&
    typeof data.id === "string" &&
    typeof data.type === "string" &&
    (isValidTextBlock(data) ||
      isValidImageBlock(data) ||
      isValidListBlock(data) ||
      isValidButtonBlock(data))
  );
}

function isValidTextBlock(data: any): data is TextBlock {
  return (
    data.type === "text" &&
    typeof data.text === "string" &&
    typeof data.color === "string" &&
    ["center", "left", "right"].includes(data.align)
  );
}

function isValidImageBlock(data: any): data is ImageBlock {
  return data.type === "image" && typeof data.src === "string";
}

function isValidListBlock(data: any): data is ListBlock {
  return (
    data.type === "list" &&
    Array.isArray(data.items) &&
    data.items.every(isValidListItem)
  );
}

function isValidListItem(data: any): data is ListItem {
  return (
    typeof data === "object" &&
    data !== null &&
    typeof data.title === "string" &&
    typeof data.description === "string" &&
    typeof data.src === "string"
  );
}

function isValidButtonBlock(data: any): data is ButtonBlock {
  return (
    data.type === "button" &&
    typeof data.text === "string" &&
    typeof data.color === "string" &&
    typeof data.bgColor === "string"
  );
}
