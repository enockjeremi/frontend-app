import React, { ReactNode } from "react";

//Feching data
import HTTPMethod from "../lib/http-method";

//Components
import ButtonForServer from "../components/server-components/button-server";
import HeadMessageSuccess from "./head-message-success";

//Types
import { GetCategoryResponse } from "../types/category.type";
import { endPoints } from "../lib/api";

interface Props {
  startContent: () => ReactNode;
  endContent: () => ReactNode;
}

const HeadSections = async ({ startContent, endContent }: Props) => {
  const categories = await HTTPMethod.get<GetCategoryResponse[]>(
    endPoints.categories.get
  );

  
  
  return (
    <>
      <div className="w-full flex flex-col space-y-4 py-3">
        <div className="flex w-full flex-col space-y-2 sm:space-y-0 sm:flex-row items-center sm:justify-between">
          <span className="text-inherit text-xl sm:w-1/2 uppercase font-mono">
            {startContent()}
          </span>
          <div className="flex w-full sm:w-1/2 items-center justify-center sm:justify-end gap-3">
            {endContent()}
          </div>
        </div>
        <div
          className={`w-full grid lg:grid-cols-6 grid-cols-2 md:grid-cols-3 pt-2 justify-between gap-2 drop-shadow-md items-center rounded-md `}
        >
          {categories?.map((category) => (
            <ButtonForServer category={category.categoryName} key={category.id}>
              <span className="uppercase">{category.categoryName}</span>
            </ButtonForServer>
          ))}
        </div>
        <HeadMessageSuccess />
      </div>
    </>
  );
};

export default HeadSections;
