"use client";
import React from "react";

const MessageContext = React.createContext<
  [string, React.Dispatch<React.SetStateAction<string>>] | null
>(null);

export function MessageContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [message, setMessage] = React.useState<string>("");
  if (message !== "") {
    setTimeout(() => {
      setMessage("");
    }, 3000);
  }
  return (
    <MessageContext.Provider value={[message, setMessage]}>
      {children}
    </MessageContext.Provider>
  );
}

export function useMessage() {
  const context = React.useContext(MessageContext);
  if (context === null) {
    throw new Error("useMessage must be used within MessageProvider");
  }
  return context;
}
