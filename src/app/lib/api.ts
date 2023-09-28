const API_URL = process.env.NEXT_PUBLIC_API_URL;
const TAG_REVALIDATE_URL = process.env.NEXT_PUBLIC_REVALIDATE_TAG_URL;
const TAG = process.env.NEXT_PUBLIC_REVALIDATE_TAG;
const PATCH_REVALIDATE_URL = process.env.NEXT_PUBLIC_REVALIDATE_PATH_URL;
const TOKEN = process.env.NEXT_PUBLIC_MY_SECRET_TOKEN;

export const endPoints = {
  reports: {
    get: `${API_URL}/reports/`,
    create: `${API_URL}/reports/`,
    getById: (id: number) => `${API_URL}/reports/${id}`,
    updateById: (id: number | undefined) => `${API_URL}/reports/${id}`,
    deleteById: (id: number) => `${API_URL}/reports/${id}`,
  },
  categories: {
    get: `${API_URL}/categories/`,
    getById: (id: number) => `${API_URL}/categories/${id}`,
  },
  revalidate_tag: `${TAG_REVALIDATE_URL}?tag=${TAG}&secret=${TOKEN}`,
  revalidate_path: (PATH: string) =>
    `${PATCH_REVALIDATE_URL}?path=${PATH}`,
};
