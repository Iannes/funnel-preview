import { ListBlock as ListBlockType } from "types";
import Image from "next/image";

type ListBlockProps = {
  block: ListBlockType;
};

export const ListBlock = ({ block }: ListBlockProps) => {
  return block?.items ? (
    <div className="flex flex-wrap -m-2">
      {block.items.map((item) => (
        <div key={item.title} className="p-2 w-1/2">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col items-center text-center">
            <div className="relative w-full h-16">
              <div className="absolute inset-0 bg-sky-900  rounded-bl-full" />
              <h3 className="pt-2 text-lg font-semibold text-white absolute w-full">
                {item.title}
              </h3>
              <div className="relative w-12 h-12 mx-auto mt-10">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-full border-solid border-4 bg-white"
                />
              </div>
            </div>
            <footer className="h-24 w-full p-8 bg-white rounded-b-lg">
              <p className="text-sm font-medium break-words text-black text-center m-auto">
                {item.description}
              </p>
            </footer>
          </div>
        </div>
      ))}
    </div>
  ) : null;
};
