"use client";
import React from "react";
import { useRouter } from "next/navigation";
import NextLink from "next/link";

//Components UI
import { Button } from "@nextui-org/button";
import Swal from "sweetalert2";

//FETCHING DATA
import { endPoints } from "@/app/lib/api";
import HTTPMethod from "@/app/lib/http-method";

//Context
import { useMessage } from "@/app/context/message-context";

interface Props {
  id: number;
}

const DeleteEditButtons = ({ id }: Props) => {
  const router = useRouter();
  const [message, setMessage] = useMessage();
  const handleDelete = () => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "Si se elmina no se podra recuperar la informacion!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Si, eliminar.",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await HTTPMethod.delete(endPoints.reports.deleteById(id))
          .then(async (resolve) => {
            setMessage(resolve.message);
            router.push("/");
            router.refresh();
          })
          .catch((error) => {
            setMessage(error.message);
          });
        Swal.fire(
          "¡Listo!",
          "El elemento a sido elminado con exito.",
          "success"
        );
      }
    });
  };
  return (
    <>
      <Button
        color="danger"
        className="text-white uppercase font-bold"
        onClick={() => {
          handleDelete();
        }}
      >
        Eliminar
      </Button>
      {/* ---- */}
      <Button
        color="primary"
        className="text-white uppercase font-bold"
        href={`edit/${id}`}
        as={NextLink}
      >
        Modificar
      </Button>
    </>
  );
};

export default DeleteEditButtons;
