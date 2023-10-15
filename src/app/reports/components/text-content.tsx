import React, { ReactNode } from "react";

//Component UI
import { Divider } from "@nextui-org/divider";

type Props = {
  textLabel: string;
  children: ReactNode;
};

const TextContent = ({ textLabel, children }: Props) => {
  return (
    <div className="w-full flex flex-col justify-between gap-2 rounded-lg p-4">
      <div className="w-full flex flex-wrap items-center justify-between">
        <span className="text-sm text-default-700 pb-2 first-letter:uppercase">{textLabel}:</span>
        <Divider orientation="horizontal" className="bg-black/50" />
      </div>
      <div className="w-full flex flex-wrap  items-center justify-between">
        <span className="w-full first-letter:uppercase">{children}</span>
      </div>
    </div>
  );
};

export default TextContent;
