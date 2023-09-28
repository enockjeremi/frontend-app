"use client";
import React from "react";
import { Button, Link } from "@nextui-org/react";
import { GetReportResponse } from "@/app/types/report.type";

import TextContent from "../../components/text-content";

interface Props {
  data: GetReportResponse;
}
const ReportContentId = ({ data }: Props) => {
  return (
    <>
      <div className="flex flex-col w-full space-y-3">
        <TextContent textLabel="Nombre de la reparacion">
          {data.reportName}
        </TextContent>
        <div className="flex flex-col sm:flex-row gap-4">
          <TextContent textLabel="Modelo">{data.carModel}</TextContent>
          <TextContent textLabel="Año">{data.carYear}</TextContent>
        </div>
        <div className="flex gap-4">
          <TextContent textLabel="Categoria">
            {data.categoryName.categoryName}
          </TextContent>
          <TextContent textLabel="Kilometraje">{data.mileage}</TextContent>
        </div>
        <div className="w-full flex flex-col sm:flex-row justify-between items-center border gap-4 border-black/50 rounded-lg p-4">
          <span className="w-full text-sm text-default-700">
            Codigos DTCs presentados:
          </span>
          <div className="w-full flex justify-start sm:justify-end gap-4">
            {data.reportDtc.length !== 0 ? (
              data.reportDtc?.map((dtc, index) => (
                <Button
                  as={Link}
                  target="_blank"
                  href={`https://www.google.cl/search?q=${dtc}`}
                  className={"uppercase"}
                  key={index}
                >
                  {dtc}
                </Button>
              ))
            ) : (
              <p className={"text-default-400"}>Sin DTCs reportados.</p>
            )}
          </div>
        </div>
        <TextContent textLabel="Fallas reportadas">
          {data.reportFault}
        </TextContent>
        <TextContent textLabel="Diagnostico realizado">
          textContent={data.reportDiagnostic}
        </TextContent>
        <TextContent textLabel="Solucion presentada">
          {data.reportFix}
        </TextContent>
      </div>
    </>
  );
};

export default ReportContentId;
