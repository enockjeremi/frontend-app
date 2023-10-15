const VERSION = process.env.NEXT_PUBLIC_VERSION_API;
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const endPoints = {
  reports: {
    get: `${API_URL}/${VERSION}/reports/`,

    pagination: (limit: number | undefined, offset: number | undefined) =>
      `${API_URL}/${VERSION}/reports?limit=${limit}&offset=${offset}`,

    create: `${API_URL}/${VERSION}/reports/`,
    getById: (id: number) => `${API_URL}/${VERSION}/reports/${id}`,
    updateById: (id: number | undefined) =>
      `${API_URL}/${VERSION}/reports/${Number(id)}`,
    deleteById: (id: number) => `${API_URL}/${VERSION}/reports/${id}`,

    filterByCategoryName: (
      category: string | undefined,
      limit: number | undefined,
      offset: number | undefined
    ) =>
      `${API_URL}/${VERSION}/reports/filter-by-category?category=${category}&limit=${limit}&offset=${offset}`,

    filterBy: (filter: string, limit?: number, offset?: number) =>
      `${API_URL}/${VERSION}/reports/filter-by-reports?filter=${filter}&limit=${limit}&offset=${offset}`,
  },
  categories: {
    get: `${API_URL}/${VERSION}/categories/`,
    getByCategoryName: (category: string) =>
      `${API_URL}/${VERSION}/categories?category=${category}`,
    getById: (id: number) => `${API_URL}/${VERSION}/categories/${id}`,
  },
};
