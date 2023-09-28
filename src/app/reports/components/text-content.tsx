import React, { ReactNode } from "react";

import { Divider } from "@nextui-org/react";

type Props = {
  textLabel: string;
  children: ReactNode;
};

const TextContent = ({ textLabel, children }: Props) => {
  return (
    <div className="w-full flex flex-col justify-between border gap-2 border-black/50 rounded-lg p-4">
      <div className="w-full flex flex-wrap items-center justify-between">
        <span className="text-sm text-default-700 pb-2">{textLabel}:</span>
        <Divider orientation="horizontal" className="bg-black/50" />
      </div>
      <div className="w-full flex flex-wrap items-center justify-between">
        {children}
      </div>
    </div>
  );
};

export default TextContent;
