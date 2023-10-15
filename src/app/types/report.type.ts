import { GetCategoryResponse } from "@/app/types/category.type";

export interface GetReportResponse {
  items: Reports[];
  meta: Meta;
}

export interface Meta {
  totalItems: number;
  itemsPerPage: number;
  pageCount: number;
}

export type Reports = {
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
