import { IMAGE_URL } from "../utils/consts";

export const getImage = async (id) => {
    try {
        const response = await fetch(`${IMAGE_URL}/${id}`);
        const data = await response.json();
        return data?.rows[0]?.miniature?.href;
    } catch (error) {
        console.error(error);
    }
}

