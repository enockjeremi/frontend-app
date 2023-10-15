import React from "react";
import { redirect } from "next/navigation";

//FETCHING DATA
import { endPoints } from "@/app/lib/api";
import HTTPMethod from "@/app/lib/http-method";

//Components
import HeadSections from "../../common/head-section";
import InputForServer from "../../components/server-components/input-server";
import InfinityContentBy from "./components/infinity-content-filter";

//Types & Util
import { GetReportResponse } from "@/app/types/report.type";
import { replaceCharacters } from "@/app/lib/utility";

const reg = /^[a-zA-Z0-9\s-]+$/;

const Page = async ({ params }: { params: { search: string } }) => {
  const { search } = params;
  if (!reg.test(search)) return redirect("/404");
  const replace = replaceCharacters(search, "-", true);
  const data = await HTTPMethod.get<GetReportResponse>(
    endPoints.reports.filterBy(replace, 9, 0)
  );

  const startContent = () => {
    return (
      <h1>
        Busqueda de reportes
      </h1>
    );
  };
  const endContent = () => {
    return <InputForServer className="w-full" />;
  };

  return (
    <>
      <HeadSections startContent={startContent} endContent={endContent} />
      <section className="w-full mb-3">
        <InfinityContentBy data={data} search={params.search} />
      </section>
    </>
  );
};

export default Page;
