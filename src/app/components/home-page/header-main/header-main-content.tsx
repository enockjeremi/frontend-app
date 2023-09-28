"use client";
import React from "react";
import { Input } from "@nextui-org/react";
import { useMessage } from "@/app/context/message-context";

const HeaderContentMain = () => {
  const [message] = useMessage();

  return (
    <>
      <span className="text-inherit text-xl sm:w-1/2 uppercase font-mono">
        Reportes de diagnosticos
      </span>

      <Input size="sm" className={"sm:w-1/2"} type="text" label="Buscar..." />

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

export default HeaderContentMain;
