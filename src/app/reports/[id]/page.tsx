import React from "react";

//Types
import { GetReportResponse, Reports } from "@/app/types/report.type";

//Components
import ReportContentId from "./components/report-content-id";
import HeadSections from "@/app/common/head-section";
import DeleteEditButtons from "./components/delete-edit-buttons";

//FETCHING DATA
import { endPoints } from "@/app/lib/api";
import HTTPMethod from "@/app/lib/http-method";

export async function generateStaticParams() {
  const data = await HTTPMethod.get<GetReportResponse>(endPoints.reports.get);
  return data.items.map((report) => ({ id: report.id.toString() }));
}

const Page = async ({ params }: { params: { id: number } }) => {
  const data = await HTTPMethod.get<Reports>(
    endPoints.reports.getById(params.id)
  );
  const startContent = () => {
    return `Reporte de diagnostico #${params.id}`;
  };
  const endContent = () => {
    return <DeleteEditButtons id={params.id} />;
  };
  return (
    <>
      <HeadSections startContent={startContent} endContent={endContent} />
      <section className="w-full flex flex-col justify-center items-center my-3">
        <ReportContentId data={data} />
      </section>
    </>
  );
};

export default Page;
