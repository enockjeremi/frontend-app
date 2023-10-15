import React from "react";

//Types
import { FormType } from "@/app/types/report.type";
import { GetCategoryResponse } from "@/app/types/category.type";

//Components
import Form from "@/app/reports/components/form";
import HeadSections from "@/app/common/head-section";

//Feching data
import HTTPMethod from "@/app/lib/http-method";
import { endPoints } from "@/app/lib/api";

const Page = async () => {
  const data = await HTTPMethod.get<GetCategoryResponse[]>(endPoints.categories.get);
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

  const startContent = () => {
    return <h1>Registra un nuevo reporte</h1>;
  };
  const endContent = () => {
    return <h2></h2>;
  };

  return (
    <>
      <HeadSections startContent={startContent} endContent={endContent} />

      <section className="w-full flex flex-col justify-center items-center my-3">
        <Form isNew={true} form={form} categories={data} />
      </section>
    </>
  );
};

export default Page;
