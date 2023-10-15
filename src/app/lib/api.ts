const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const endPoints = {
  reports: {
    get: `${API_URL}/reports/`,

    pagination: (limit: number | undefined, offset: number | undefined) =>
      `${API_URL}/reports?limit=${limit}&offset=${offset}`,

    create: `${API_URL}/reports/`,
    getById: (id: number) => `${API_URL}/reports/${id}`,
    updateById: (id: number | undefined) => `${API_URL}/reports/${Number(id)}`,
    deleteById: (id: number) => `${API_URL}/reports/${id}`,

    filterByCategoryName: (
      category: string | undefined,
      limit: number | undefined,
      offset: number | undefined
    ) =>
      `${API_URL}/reports/filter-by-category?category=${category}&limit=${limit}&offset=${offset}`,

    filterBy: (filter: string, limit?: number, offset?: number) =>
      `${API_URL}/reports/filter-by-reports?filter=${filter}&limit=${limit}&offset=${offset}`,
  },
  categories: {
    get: `${API_URL}/categories/`,
    getByCategoryName: (category: string) =>
      `${API_URL}/categories?category=${category}`,
    getById: (id: number) => `${API_URL}/categories/${id}`,
  },
};
