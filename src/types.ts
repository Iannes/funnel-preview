export type MetaProps = {
  title?: string;
  keywords?: string;
  description?: string;
  canonicalUrl?: string;
};

export type Funnel = {
  name: string;
  bgColor: string;
  pages: Page[];
};

export type Page = {
  id: string;
  blocks: Block[];
};

export enum BlockType {
  Text = "text",
  Image = "image",
  List = "list",
  Button = "button",
}

export type Block = TextBlock | ImageBlock | ListBlock | ButtonBlock;

export type TextBlock = {
  type: BlockType.Text;
  text: string;
  color: string;
  align: "center" | "left" | "right";
};

export type ImageBlock = {
  type: BlockType.Image;
  src: string;
};

export type ListBlock = {
  type: BlockType.List;
  items: ListItem[];
};

export type ListItem = {
  title: string;
  description: string;
  src: string;
};

export type ButtonBlock = {
  type: BlockType.Button;
  text: string;
  color: string;
  bgColor: string;
};

export enum DeviceDimensions {
  width = 375,
  height = 600,
}

export type FunnelData = {
  name: string;
  bgColor: string;
  pages: Array<{
    id: string;
    blocks: Array<Block>;
  }>;
};

export type ErrorMessageState = {
  hasError: boolean;
  errorMessage: string;
};
