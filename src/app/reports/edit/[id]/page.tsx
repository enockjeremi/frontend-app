import React from "react";

import {
  getDataCategories,
  getDataReportById,
} from "@/app/lib/getDataFunctions";
import { FormType, GetReportResponse } from "@/app/types/report.type";

import HeaderContentNew from "../../components/header-content-new";
import Form from "../../components/form";

const Page = async ({ params }: { params: { id: number } }) => {
  const categories = await getDataCategories();
  const data: GetReportResponse = await getDataReportById(params.id);

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

  return (
    <>
      <header className="w-full border-b flex space-y-2 flex-wrap py-2 justify-between items-center  border-black/50">
        <HeaderContentNew />
      </header>

      <section className="w-full flex flex-col justify-center items-center my-3">
        <Form isNew={false} form={form} id={params.id} categories={categories} />
      </section>
    </>
  );
};

export default Page;
