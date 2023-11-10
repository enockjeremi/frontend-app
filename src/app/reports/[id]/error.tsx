"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="grid place-items-center h-[80vh]">
      <div>
        <h1 className="text-xl text-center">Lo sentimos!</h1>
        <span className="text-lg text-default-500">No se a podido encontrar la informacion que solicitaste.</span>
      </div>
    </div>
  );
}
