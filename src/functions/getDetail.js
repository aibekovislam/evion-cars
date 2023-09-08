import { DETAILS_URL } from "../utils/consts"

export const getDetail = async (id) => {
    try {
        const response = await fetch(`${DETAILS_URL}/${id}`);
        if(!response.ok) {
            throw new Error('Ошибка не получили данные')
        }
        const data = response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}