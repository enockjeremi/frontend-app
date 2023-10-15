'use client'
import React, { ReactNode } from "react";
import NextLink from "next/link";

//Components UI
import { Button } from "@nextui-org/button";
import { replaceCharacters } from "@/app/lib/utility";

interface Props {
  children: ReactNode;
  category: string;
}
const ButtonForServer = ({ children , category}: Props) => {
  const link = replaceCharacters(category).trim();

  return (
    <Button
      as={NextLink}
      color="default"
      size="sm"
      href={`/categories/${link}`}
    >
      {children}
    </Button>
  );
};

export default ButtonForServer;
