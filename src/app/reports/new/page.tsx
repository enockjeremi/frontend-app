import React from "react";

import { FormType } from "@/app/types/report.type";
import Form from "../components/form";
import HeaderContentNew from "../components/header-content-new";

import { getDataCategories } from "@/app/lib/getDataFunctions";
import HeaderContent from "../[id]/components/header-content";

const Page = async () => {
  const data = await getDataCategories();
  const form: FormType = {
    reportName: "",
    carModel: "",
    carYear: "",
    categoryNameId: 1,
    reportDtc: [],
    reportFault: "",
    reportDiagnostic: "",
    reportFix: "",
    mileage: "",
  };
  return (
    <>
      <header className="w-full border-b flex space-y-2 flex-wrap py-2 justify-between items-center  border-black/50">
        <HeaderContent textLabel="Agregar nuevo reporte">
          <span>Agregar</span>
        </HeaderContent>
      </header>
      <section className="w-full flex flex-col justify-center items-center my-3">
        <Form isNew={true} form={form} categories={data} />
      </section>
    </>
  );
};

export default Page;
