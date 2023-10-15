import { Reports } from "./report.type";

export type GetCategoryResponse = {
  id: number;
  categoryName: string;
  reports?: Reports[];
  totalReports?: number;
};
