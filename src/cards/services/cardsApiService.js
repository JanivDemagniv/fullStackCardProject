import axios from "axios";
import useAxios from "../../hooks/useAxios";

export const apiUrl = "https://cardserver-59hd.onrender.com/cards";

useAxios()


export const getCards = async () => {
    try {
        const response = await axios.get(apiUrl);
        const data = response.data;
        return data
    } catch (e) {
        throw new Error(e.message)
    }
}

export const getCardById = async (id) => {
    try {
        const response = await axios.get(apiUrl + '/' + id);
        const data = response.data;
        return data;
    } catch (e) {
        throw new Error(e.message)
    }
}

export const createCardRequest = async (card) => {
    try {
        const response = await axios.post(apiUrl, card)
        const data = response.data
        return data
    } catch (e) {
        throw new Error(e.message)
    }
}

export const sendUpdateCard = async (card, id) => {
    try {
        const response = await axios.put(apiUrl + "/" + id, card)
        const data = response.data
        return data
    } catch (e) {
        throw new Error(e.message)
    }
}

export const getMyCards = async () => {
    try {
        const response = await axios.get(apiUrl + '/my-cards')
        const data = response.data
        return data
    } catch (e) {
        throw new Error(e.message)
    }
}

export const likeCard = async (id) => {
    try {
        const response = await axios.patch(`${apiUrl}/${id}`, id)
        const data = response.data;
        return data
    } catch (e) {
        throw new Error(e.message)
    }
}

export const deleteCard = async (cardId) => {
    try {
        const response = await axios.delete(apiUrl + '/' + cardId);
        const data = response.data
        return data
    } catch (e) {
        throw new Error(e.message)
    }
}
