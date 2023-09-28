import { GetReportResponse } from "../types/report.type";
import { GetCategoryResponse } from "../types/category.type";
import { FormType } from "../types/report.type";
import { endPoints } from "./api";

export async function getDataReport() {
  const res = await fetch(endPoints.reports.get, {
    next: { tags: ["reports"] },
  });
  if (!res.ok) {
    throw new Error("No se pudieron cargar los datos");
  }

  return (await res.json()) as GetReportResponse[];
}

export async function getDataReportById(id: number) {
  const res = await fetch(endPoints.reports.getById(id), {
    next: { tags: ["reports"]}
  });
  if (!res.ok) {
    throw new Error("No se pudieron cargar los datos");
  }

  return (await res.json()) as GetReportResponse;
}

export async function getDataCategories() {
  const res = await fetch(endPoints.categories.get, {
    next: { tags: ["reports"] },
  });
  return (await res.json()) as GetCategoryResponse[];
}

export const createReport = async (body: FormType): Promise<string> => {
  return new Promise(async (resolve, rejects) => {
    try {
      const res = await fetch(endPoints.reports.create, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        const message = await res.json();
        rejects(message.message);
      }
      resolve("Agregado de forma correcta.");
    } catch (error) {
      rejects("No se a podido agregar el reporte.");
    }
  });
};

export const updateReport = async (body: FormType, id: number | undefined): Promise<string> => {
  return new Promise(async (resolve, rejects) => {
    try {
      const res = await fetch(endPoints.reports.updateById(id), {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const message = await res.json();
        rejects(message.message);
      }
      resolve("Modificado de forma correcta.");
    } catch (error) {
      rejects("No se a podido modificar el reporte.");
    }
  });
};

export const revalidate_tag = async () => {
  try {
    const res = await fetch(endPoints.revalidate_tag, {
      method: "POST",
    });
    if (!res.ok) {
      throw new Error("No se pudieron revalidar los datos.");
    }
    return res;
  } catch (error) {
    throw new Error("No se pudieron revalidar los datos.");
  }
};

export const revalidate_path = async (id: number | undefined) => {
  try {
    const res = await fetch(endPoints.revalidate_path(`/reports/${id}`), {
      method: "POST",
    });
    if (!res.ok) {
      throw new Error("No se pudieron revalidar los datos.");
    }
    return res;
  } catch (error) {
    throw new Error("No se pudieron revalidar los datos.");
  }
};
