import axios from "axios";
import useAxios from "../../hooks/useAxios"


const apiUrl = 'https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users'
useAxios();

export const getAllUsers = async () => {
    try {
        const response = await axios.get(apiUrl);
        return response.data
    } catch (e) {
        throw new Error(e)
    }
}

export const deleteUser = async (id) => {
    try {
        const response = await axios.delete(apiUrl + '/' + id);
        return response.data
    } catch (e) {
        throw new Error(e.message)
    }

}

export const updateUserStatus = async (id) => {
    try {
        const response = await axios.patch(apiUrl + '/' + id)
    } catch (e) {
        throw new Error(e.message)
    }
}