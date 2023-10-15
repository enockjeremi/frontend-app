import React from "react";

//Feching functions
import HTTPMethod from "./lib/http-method";
//Types
import { GetReportResponse } from "./types/report.type";

//Components
import InputForServer from "./components/server-components/input-server";
import HeadSections from "./common/head-section";
import InfinityContent from "./components/infinity-content";
import { endPoints } from "./lib/api";


export default async function Home() {
  const data = await HTTPMethod.get<GetReportResponse>(
    endPoints.reports.pagination(9, 0)
  );

  const startContent = () => {
    return <h1>Reportes de diagnosticos</h1>;
  };
  const endContent = () => {
    return <InputForServer className="w-full" />;
  };
  return (
    <>
      <HeadSections startContent={startContent} endContent={endContent} />
      <section className="w-full my-2">
        <InfinityContent data={data} />
      </section>
    </>
  );
}
