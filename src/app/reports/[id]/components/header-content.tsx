"use client";
import React, { ReactNode } from "react";

type Props = {
  textLabel: string;
  children: ReactNode;
};


const HeaderContent = ({ textLabel, children }: Props) => {
  return (
    <>
      <div className="flex w-full flex-col sm:flex-row items-start sm:items-center sm:justify-between">
        <span className="text-inherit text-xl sm:w-1/2 uppercase font-mono">
          {textLabel}
        </span>
        <div className="uppercase font-mono text-xl  py-2.5">
          {children}
        </div>
      </div>
    </>
  );
};

export default HeaderContent;
