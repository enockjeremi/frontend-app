'use client'
import React from "react";
import { useMessage } from "../context/message-context";

const HeadMessageSuccess = () => {
  const [message] = useMessage();
  return (
    <div
      className={`w-full bg-green-500 p-2 rounded-md text-white ${
        message !== ""
          ? "flex transition duration-300"
          : "hidden transition duration-300"
      }  `}
    >
      {message}
    </div>
  );
};

export default HeadMessageSuccess;
