"use client";
import React from "react";
import NextLink from "next/link";
import { Button } from "@nextui-org/react";
import { useMessage } from "@/app/context/message-context";

interface Props {
  id: number;
}

const HeaderContentId = ({ id }: Props) => {
  const [message] = useMessage();
  return (
    <>
      <div className="flex w-full flex-col sm:flex-row items-start sm:items-center sm:justify-between">
        <span className="text-inherit text-xl sm:w-1/2 uppercase font-mono">
          Reporte de diagnostico #{id}
        </span>
        <span className="uppercase font-mono text-xl  py-2.5">
          <Button
            color="primary"
            className="text-white font-bold"
            href={`edit/${id}`}
            as={NextLink}
          >
            Modificar
          </Button>
        </span>
      </div>
      <div
        className={`w-full bg-green-500 p-2 rounded-md text-white ${
          message !== ""
            ? "flex transition duration-300"
            : "hidden transition duration-300"
        }  `}
      >
        {message}
      </div>
    </>
  );
};

export default HeaderContentId;
