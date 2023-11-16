import { render, screen } from "@testing-library/react";
import { TextBlock } from "./TextBlock";
import { BlockType, TextBlock as TextBlockType } from "types";

describe("TextBlock", () => {
  it("renders the text block with the correct text and styles", () => {
    const testBlock = {
      type: BlockType.Text,
      text: "Hello, this is a test",
      color: "rgb(255, 0, 0)",
      align: "center",
    };

    render(<TextBlock block={testBlock as TextBlockType} />);

    const textElement = screen.getByText(testBlock.text);

    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveStyle({
      color: testBlock.color,
      textAlign: testBlock.align,
    });
  });
});
