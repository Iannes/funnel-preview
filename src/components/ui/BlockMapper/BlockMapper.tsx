import { TextBlock } from "components/ui/TextBlock";
import { ListBlock } from "components/ui/ListBlock";
import { ButtonBlock } from "components/ui/ButtonBlock";
import { ImageBlock } from "components/ui/ImageBlock";

import { Block, BlockType } from "types";

type BlockProps = {
  blocks: Block[];
};

export const BlockMapper = ({ blocks }: BlockProps) => {
  return (
    <>
      {blocks.map((block: Block, index: number) => {
        switch (block.type) {
          case BlockType.Text:
            return <TextBlock key={`${block.type}-${index}`} block={block} />;
          case BlockType.Image:
            return <ImageBlock key={`${block.type}-${index}`} block={block} />;
          case BlockType.List:
            return <ListBlock key={`${block.type}-${index}`} block={block} />;
          case BlockType.Button:
            return <ButtonBlock key={`${block.type}-${index}`} block={block} />;
          default:
            return null;
        }
      })}
    </>
  );
};
