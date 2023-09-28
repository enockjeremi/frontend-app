"use client";
import { Button } from "@nextui-org/react";
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";

import IconPlus from "@/app/common/icons/plus-icon";
import ArrowBack from "@/app/common/icons/arrow-back-icon";

export const ButtonBack = () => {
  const pathname = usePathname();
  const router = useRouter()
  return (
    pathname !== "/" && (
      <Button onClick={() => router.push('/')} isIconOnly startContent={<ArrowBack />} />
    )
  );
};
export const ButtonQuery = () => {
  return (
    <>
      <Button
        href={"/reports/new"}
        as={NextLink}
        className="hidden sm:flex"
        startContent={<IconPlus />}
        color="default"
        radius="sm"
      >
        Agregar nuevo reporte
      </Button>
      <Button
        href={"/reports/new"}
        as={NextLink}
        className="flex sm:hidden"
        startContent={<IconPlus />}
        color="default"
        radius="sm"
        isIconOnly
      />
    </>
  );
};
