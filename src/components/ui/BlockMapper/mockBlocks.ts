import { BlockType } from "types";

const IMAGE_SOURCE =
  "https://images.unsplash.com/photo-1598182198871-d3f4ab4fd181?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80";

export const mockBlocks = {
  [BlockType.Text]: {
    type: BlockType.Text,
    text: "Sample Text",
    color: "#F5F5F5",
    align: "center",
  },
  [BlockType.Image]: { type: BlockType.Image, src: IMAGE_SOURCE },
  [BlockType.List]: {
    type: BlockType.List,
    items: [
      {
        title: "1/2 Pounder",
        description: "Tshhh... Yummy!",
        src: "https://images.unsplash.com/photo-1598182198871-d3f4ab4fd181?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
      },
      {
        title: "Cheese Burger",
        description: "Tshhh... Ahhhhh!",
        src: "https://images.unsplash.com/photo-1598182198871-d3f4ab4fd181?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
      },
    ],
  },
  [BlockType.Button]: {
    type: BlockType.Button,
    text: "Click Me",
    color: "white",
    bgColor: "blue",
  },
};
