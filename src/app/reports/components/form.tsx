"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

//Schema validations and resolvers
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";

//Component UI
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Select, SelectItem } from "@nextui-org/select";
import { Input, Textarea } from "@nextui-org/input";

//Types
import { FormType } from "@/app/types/report.type";
import { GetCategoryResponse } from "@/app/types/category.type";

//Icon
import IconPlus from "@/app/common/icons/plus-icon";

//Fetching functions
import HTTPMethod from "@/app/lib/http-method";
import { endPoints } from "@/app/lib/api";

//Context
import { useMessage } from "@/app/context/message-context";

//Components
import TextContent from "./text-content";
import Swal from "sweetalert2";
import { Spinner } from "@nextui-org/spinner";

interface Props {
  isNew: boolean;
  categories: GetCategoryResponse[];
  form: FormType;
  id?: number;
}

const schema = Joi.object({
  reportName: Joi.string(),
  carModel: Joi.string().required(),
  carYear: Joi.number().min(1).required(),
  categoryNameId: Joi.number().required(),
  reportDtc: Joi.array(),
  reportFault: Joi.string().required(),
  reportDiagnostic: Joi.string().required(),
  reportFix: Joi.string().required(),
  mileage: Joi.number().min(1).required(),
});

const Form = ({ isNew, form, categories, id }: Props) => {
  const router = useRouter();
  const [dtc, setDtc] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useMessage();
  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    defaultValues: {
      reportName: form.reportName,
      carModel: form.carModel,
      carYear: form.carYear,
      categoryNameId: form.categoryNameId,
      reportDtc: form.reportDtc,
      reportFault: form.reportFault,
      reportDiagnostic: form.reportDiagnostic,
      reportFix: form.reportFix,
      mileage: form.mileage,
    },
    resolver: joiResolver(schema),
  });

  const onSubmit: SubmitHandler<FormType> = async (data) => {
    if (isNew) {
      setIsLoading(true);
      await HTTPMethod.post<FormType>(endPoints.reports.create, data)
        .then((resolve) => {
          setMessage(resolve.message);
          router.push("/");
          router.refresh();
        })
        .catch((error) => {
          setMessage(error.message);
        });
    } else {
      Swal.fire({
        title: "¿Guardar cambios?",
        showCancelButton: true,
        cancelButtonColor: "rgb(239 68 68 / 1)",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Guardar",
        confirmButtonColor: "rgb(34 197 94 / 1)",
      }).then(async (result) => {
        if (result.isConfirmed) {
          setIsLoading(true);
          await HTTPMethod.put<FormType>(endPoints.reports.updateById(id), data)
            .then(async (resolve) => {
              setMessage(resolve.message);
              router.push(`/reports/${id}`);
              router.refresh();
            })
            .catch((error) => {
              setMessage(error.message);
            });
          Swal.fire("Modificado", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full space-y-0"
      >
        <TextContent textLabel="Nombre de el reporte">
          <Input
            {...register("reportName")}
            type="text"
            className="w-full"
            labelPlacement={"outside"}
            placeholder="Ej: Cambio de embrague"
          />
          {errors.reportName && (
            <span className="p-2 text-sm text-red-500">
              Este campo es obligatorio.
            </span>
          )}
        </TextContent>
        <div className="w-full flex flex-col sm:flex-row justify-start items-start  gap-2">
          <TextContent textLabel="Modelo">
            <Input
              {...register("carModel")}
              type="text"
              placeholder="Ej: Santa Fe"
            />
            {errors.carModel && (
              <span className="p-2 text-sm text-red-500">
                Este campo es obligatorio.
              </span>
            )}
          </TextContent>
          <TextContent textLabel="Año">
            <Input
              {...register("carYear")}
              type="text"
              placeholder="Ej: 2012"
              maxLength={4}
            />
            {errors.carYear && (
              <span className="p-2 text-sm text-red-500">
                {errors.carYear.message && (
                  <p className="text-sm text-red-500 flex flex-col">
                    <span>Campo es obligatorio</span>
                    <span>Debe ser un numero mayor a 0</span>
                  </p>
                )}
              </span>
            )}
          </TextContent>
        </div>
        <div className="w-full flex flex-col sm:flex-row justify-start items-start  gap-2">
          <TextContent textLabel="Categoria">
            <Select
              size="sm"
              defaultSelectedKeys={[getValues("categoryNameId").toString()]}
              placeholder="Tipo de reparacion"
              aria-label="text-select"
              {...register("categoryNameId")}
            >
              {categories?.map((category) => (
                <SelectItem key={category.id} value={Number(category.id)}>
                  {category.categoryName.toUpperCase()}
                </SelectItem>
              ))}
            </Select>
            {errors.categoryNameId && (
              <span className="p-2 text-sm text-red-500">
                {errors.categoryNameId.message && (
                  <p className="text-sm text-red-500 flex flex-col">
                    <span>Campo es obligatorio</span>
                  </p>
                )}
              </span>
            )}
          </TextContent>
          <TextContent textLabel="Kilometraje">
            <Input
              type="text"
              placeholder="Ej: 89243"
              {...register("mileage")}
            />
            {errors.mileage && (
              <p className="text-sm text-red-500 flex flex-col">
                <span>Campo es obligatorio</span>
                <span>Debe ser un numero mayor a 0</span>
              </p>
            )}
          </TextContent>
        </div>

        <div className="w-full flex justify-between flex-col sm:flex-row  gap-2 border border-black/50 rounded-lg p-4">
          <div className="w-full sm:w-[40%] flex items-center justify-between gap-2">
            <Input
              type="text"
              size="sm"
              value={dtc.toUpperCase()}
              radius="sm"
              onChange={(e) => setDtc(e.target.value)}
              label="Codigos DTCs"
            />
            <Button
              value={dtc}
              onClick={(e) => {
                setValue("reportDtc", [
                  ...getValues("reportDtc"),
                  e.currentTarget.value.toLocaleLowerCase(),
                ]);
                setDtc("");
              }}
            >
              <IconPlus />
            </Button>
          </div>
          <div>
            <Divider orientation="vertical" className="bg-black/50" />
          </div>
          <div className="w-full sm:w-[60%] flex flex-wrap items-center justify-end gap-2">
            {getValues("reportDtc")?.map((dtc, index) => {
              return (
                <Button key={index} className="uppercase">
                  {dtc}
                </Button>
              );
            })}
          </div>
        </div>

        <TextContent textLabel="Fallas reportadas">
          <Textarea
            {...register("reportFault")}
            labelPlacement="outside"
            placeholder="Fallas presentadas por el vehiculo."
            className="col-span-12 md:col-span-6 mb-6 md:mb-0"
          />
          {errors.reportFault && (
            <span className="p-2 text-sm text-red-500">
              Este campo es obligatorio.
            </span>
          )}
        </TextContent>
        <TextContent textLabel="Diagnostico realizado">
          <Textarea
            {...register("reportDiagnostic")}
            labelPlacement="outside"
            placeholder="Fallas presentadas por el vehiculo."
            className="col-span-12 md:col-span-6 mb-6 md:mb-0"
          />
          {errors.reportDiagnostic && (
            <span className="p-2 text-sm text-red-500">
              Este campo es obligatorio.
            </span>
          )}
        </TextContent>
        <TextContent textLabel="Solucion presentada">
          <Textarea
            {...register("reportFix")}
            labelPlacement="outside"
            placeholder="Fallas presentadas por el vehiculo."
            className="col-span-12 md:col-span-6 mb-6 md:mb-0"
          />
          {errors.reportFix && (
            <span className="p-2 text-sm text-red-500">
              Este campo es obligatorio.
            </span>
          )}
        </TextContent>
        <Button
          type="submit"
          isDisabled={isLoading && true}
          color="default"
          className={`uppercase`}
        >
          {isLoading ? <Spinner size="sm" /> : isNew ? "Agregar" : "Modificar"}
        </Button>
      </form>
    </>
  );
};

export default Form;
