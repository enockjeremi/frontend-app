import React from "react";

//Components
import Form from "@/app/reports/components/form";
import HeadSections from "@/app/common/head-section";

//Types
import { FormType, Reports } from "@/app/types/report.type";
import { GetCategoryResponse } from "@/app/types/category.type";

//FETCHING DATA
import { endPoints } from "@/app/lib/api";
import HTTPMethod from "@/app/lib/http-method";

const Page = async ({ params }: { params: { id: number } }) => {
  const categories = await HTTPMethod.get<GetCategoryResponse[]>(
    endPoints.categories.get
  );
  const data = await HTTPMethod.get<Reports>(endPoints.reports.getById(params.id));

  const form: FormType = {
    reportName: data.reportName,
    carModel: data.carModel,
    carYear: data.carYear,
    categoryNameId: data.categoryName.id,
    reportDtc: data.reportDtc,
    reportFault: data.reportFault,
    reportDiagnostic: data.reportDiagnostic,
    reportFix: data.reportFix,
    mileage: data.mileage,
  };
  const startContent = () => {
    return <h1>Modificando el reporte #{params.id}</h1>;
  };
  const endContent = () => {
    return <h1 className="text-xl uppercase">{form.reportName}</h1>;
  };
  return (
    <>
      <HeadSections startContent={startContent} endContent={endContent} />
      <section className="w-full flex flex-col justify-center items-center my-3">
        <Form
          isNew={false}
          form={form}
          id={params.id}
          categories={categories}
        />
      </section>
    </>
  );
};

export default Page;
