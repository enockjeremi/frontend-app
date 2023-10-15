"use client";
import React, { useState } from "react";

//Feching functions
import { endPoints } from "@/app/lib/api";
import HTTPMethod from "@/app/lib/http-method";

//Types
import { GetReportResponse, Reports } from "@/app/types/report.type";

//Components UI
import InfiniteComponent from "@/app/common/infinite-scroll";

//Components
import CardReport from "@/app/components/card-report";

interface Props {
  data: GetReportResponse;
  category: string;
}

const InfinityContentByCategory = ({ data, category }: Props) => {
  const [items, setItems] = useState<Reports[]>(data.items);
  const [hasMore, setHasMore] = useState(
    data.meta.totalItems <= 9 ? false : true
  );

  const getMorePost = async () => {
    if (items.length >= data.meta.totalItems) {
      setHasMore(false);
      return;
    }
    const res = await HTTPMethod.get<GetReportResponse>(
      endPoints.reports.filterByCategoryName(category, 9, items.length)
    );
    setItems((items) => [...items, ...res.items]);
  };

  return (
    <>
      <div className="w-full my-4 flex justify-between items-center [&>*:first-child]:w-full">
        <InfiniteComponent
          items={items?.length}
          next={getMorePost}
          more={hasMore}
        >
          <div className="grid grid-cols-1 justify-center items-center sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {items?.map((report: Reports) => (
              <CardReport
                key={report.id}
                id={report.id}
                reportName={report.reportName}
                carModel={report.carModel}
                carYear={report.carYear}
                categoryName={report.categoryName}
                mileage={report.mileage}
                reportDiagnostic={report.reportDiagnostic}
                reportDtc={report.reportDtc}
                reportFault={report.reportFault}
                reportFix={report.reportFix}
              />
            ))}
          </div>
        </InfiniteComponent>
      </div>
    </>
  );
};

export default InfinityContentByCategory;
