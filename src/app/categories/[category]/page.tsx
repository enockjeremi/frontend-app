import React from "react";

//Feching functions
import { endPoints } from "@/app/lib/api";
import HTTPMethod from "@/app/lib/http-method";

//Types
import { GetReportResponse } from "../../types/report.type";

//Components
import InfinityContentByCategory from "./components/infinity-content-by-category";
import InputForServer from "../../components/server-components/input-server";
import HeadSections from "../../common/head-section";
import { GetCategoryResponse } from "@/app/types/category.type";

export const dynamicParams = false;

export async function generateStaticParams() {
  const data = await HTTPMethod.get<GetCategoryResponse[]>(
    endPoints.categories.get
  );
  
  return data.map((category) => ({
    category: category.categoryName.toString().toLowerCase()
  }));

}

const Page = async ({ params }: { params: { category: string } }) => {
  const data = await HTTPMethod.get<GetReportResponse>(
    endPoints.reports.filterByCategoryName(params.category, 9, 0)
  );

  const startContent = () => {
    return <h1>{params.category}</h1>;
  };
  const endContent = () => {
    return <InputForServer className="w-full" />;
  };

  return (
    <>
      <HeadSections startContent={startContent} endContent={endContent} />
      <section className="w-full mb-3">
        <InfinityContentByCategory data={data} category={params.category} />
      </section>
    </>
  );
};

export default Page;
