"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

//Components UI
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

//Iconst
import SearchIcon from "@/app/common/icons/search-icon";
import { replaceCharacters } from "@/app/lib/utility";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";

interface Props {
  className: string;
}

type SearchType = {
  search: string;
};

const schema = Joi.object({
  search: Joi.string()
    .regex(/^[a-zA-Z0-9\s]+$/)
    .required(),
});

const InputForServer = ({ className = "" }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchType>({
    resolver: joiResolver(schema)
  });
  const router = useRouter();
  const onSubmit: SubmitHandler<SearchType> = async (data) => {
    const replace = replaceCharacters(`/search/${data.search.trim().toLowerCase()}`);
    router.push(replace);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex items-center justify-center gap-3"
    >
      <Input
        {...register("search")}
        size="sm"
        color={errors.search && "danger"}
        label="Buscar..."
        type="text"
        className={className}
      />
      <Button type="submit" color={errors.search && "danger"} isIconOnly>
        <SearchIcon />
      </Button>
    </form>
  );
};

export default InputForServer;
