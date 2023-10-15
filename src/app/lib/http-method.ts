import { endPoints } from "./api";

export async function fetchData<T>(url: string) {
  try {
    const res = await fetch(url, {
      next: { tags: ["reports"] },
    });
    if (!res.ok) {
      throw new Error("No se han podido cargar los datos.");
    }
    return (await res.json()) as T;
  } catch (error) {
    throw new Error("No se han podido cargar los datos.");
  }
}
const revalidate = 0

export default class HTTPMethod {
  static async get<T>(url: string) {
    try {
      const response = await fetch(url, {
        next: { revalidate: revalidate },
      });
      if (!response.ok) {
        throw new Error("No se han podido cargar los datos.");
      }
      return (await response.json()) as T;
    } catch (error) {
      throw new Error("No se han podido cargar los datos.");
    }
  }

  static async post<T>(url: string, body: T) {
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("No se a podido crear el elemento.");
      }

      return response.json();
    } catch (error) {
      throw new Error("No se a podido crear el elemento.");
    }
  }

  static async put<T>(url: string, body: T) {
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error("No se a podido modificar el elemento.");
      }

      return response.json();
    } catch (error) {
      throw new Error("No se a podido modificar el elemento.");
    }
  }

  static async delete(url: string) {
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("No se a podido eliminar el reporte.");
      }

      return response.json();
    } catch (error) {
      throw new Error("No se a podido eliminar el reporte.");
    }
  }
}
