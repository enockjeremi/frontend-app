import { GetCategoryResponse } from "./category.type";

export type GetReportResponse = {
  id: number;
  reportName: string;
  carModel: string;
  carYear: string;
  reportFault: string;
  reportDtc: string[];
  reportDiagnostic: string;
  reportFix: string;
  mileage: string;
  categoryName: GetCategoryResponse;
};


export type FormType = {
  reportName: string;
  carModel: string;
  carYear: string;
  reportFault: string;
  reportDtc: string[];
  reportDiagnostic: string;
  reportFix: string;
  mileage: string;
  categoryNameId: number;
};


