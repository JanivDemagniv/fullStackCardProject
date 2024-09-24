import axios from "axios";
import useAxios from "../../hooks/useAxios";

const apiUrl = "https://cardserver-59hd.onrender.com/users";

const login = async (userLogin) => {
    try {
        const response = await axios.post(apiUrl + '/login', userLogin);
        const data = response.data
        return data
    } catch (e) {
        throw new Error(e.message)
    }
};

const signUp = async (userSignUp) => {
    try {
        const response = await axios.post(apiUrl, userSignUp)
        const data = response.data;
        return data
    } catch (e) {
        throw new Error(e.message)
    }
}

const getUserData = async (id) => {
    try {
        useAxios()
        const response = await axios.get(apiUrl + '/' + id)
        const data = response.data;
        return data
    } catch (e) {
        throw new Error(e.message)
    }
}

const getUserDeatails = async (id) => {
    try {
        useAxios();
        let response = await axios.get(apiUrl + '/' + id)
        let data = response.data
        return data
    } catch (e) {
        throw new Error(e.message)
    }
}

const updateUserDeatails = async (id, userData) => {
    try {
        useAxios();
        let response = await axios.put(apiUrl + '/' + id, userData)
        let data = response.data
        return data
    } catch (e) {
        throw new Error(e.message)
    }
}

export { getUserData, signUp, login, getUserDeatails, updateUserDeatails }