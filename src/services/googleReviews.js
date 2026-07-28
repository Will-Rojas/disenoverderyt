import { reviews } from "../data";
import { API } from "../config/api";

export async function getReviews() {
  try {
    /*
        Cuando se cree la API simplemente descomentar esto.

        const response = await fetch(API.reviews);

        if(!response.ok){

            throw new Error("Error al obtener las reseñas.");

        }

        return await response.json();
        */

    return {
      rating: 5.0,

      totalReviews: 1,

      reviews,
    };
  } catch (error) {
    console.error(error);

    throw error;
  }
}
