import React from "react";

import { GetReportResponse } from "@/app/types/report.type";

import { getDataReportById } from "@/app/lib/getDataFunctions";

import ReportContentId from "./components/report-content-id";
import HeaderContentId from "./components/header-content-id";

const Page = async ({ params }: { params: { id: number } }) => {
  const data: GetReportResponse = await getDataReportById(params.id);
  return (
    <>
      <header className="w-full border-b flex space-y-2 flex-wrap py-2 justify-between items-center  border-black/50">
        <HeaderContentId id={data.id} />
      </header>
      <section className="w-full flex flex-col justify-center items-center my-3">
        <ReportContentId data={data} />
      </section>
    </>
  );
};

export default Page;
