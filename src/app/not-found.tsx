import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <main className="h-screen w-full">
      <div className="text-center pt-14 space-y-1">
        <h2 className="text-3xl">Ha ocurrido un problema.</h2>
        <p className="text-lg">No pudimos encontrar la página que estabas buscando.</p>
        <p className="text-md">
          Regresa a la pagina de <Link className="text-blue-600 underline underline-offset-2" href={"/"}>Inicio</Link>
        </p>
      </div>
    </main>
  );
};

export default NotFound;
