import { FormType } from "../types/report.type";
import { endPoints } from "./api";

export const postData = async (body: FormType, url: string): Promise<string> => {
  return new Promise(async (resolve, rejects) => {
    try {
      const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      if (!res.ok) {
        const message = await res.json()
        rejects(message.message)
      }
      resolve('Agregado de forma correcta.')
    } catch (error) {
      rejects('No se a podido agregar el reporte.')
    }
  })
}