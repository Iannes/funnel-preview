import { render, screen } from "@testing-library/react";
import { BlockMapper } from "./BlockMapper";
import { Block, BlockType } from "types";
import { mockBlocks } from "./mockBlocks";

const setup = (blockType: BlockType) => {
  const block = mockBlocks[blockType];
  render(<BlockMapper blocks={[block as Block]} />);
};

describe("BlockMapper", () => {
  const testCases = [
    {
      type: BlockType.Text,
      test: () => expect(screen.getByText("Sample Text")).toBeInTheDocument(),
    },
    {
      type: BlockType.Image,
      test: () => expect(screen.getByAltText("")).toBeInTheDocument(),
    },
    {
      type: BlockType.List,
      test: () => {
        const items = mockBlocks[BlockType.List].items;
        items.forEach((item) => {
          expect(screen.getByText(item.title)).toBeInTheDocument();
          expect(screen.getByText(item.description)).toBeInTheDocument();
        });
      },
    },
    {
      type: BlockType.Button,
      test: () => {
        const buttonData = mockBlocks[BlockType.Button];
        const button = screen.getByRole("button", { name: buttonData.text });
        expect(button).toBeInTheDocument();
      },
    },
  ];

  it.each(testCases)(`renders a {%s} Block`, (testCase) => {
    setup(testCase.type);
    testCase.test();
  });
});
