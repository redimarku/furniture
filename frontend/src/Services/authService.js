import axios from 'axios';

const URL = "http://localhost:3000/auth";

export async function loginService(email, password) {
    const result = await axios.post(`${URL}/login`, { email, password }, {
        withCredentials: true
    });
    return result.data;
}

export const registerService = async (name, lastname, email, password) => {
    const result = await axios.post(`${URL}/register`, { name, lastname, email, password }, {
        withCredentials: true
    });
    return result.data;
}


export async function logoutService() {
    const result = await axios.post(`${URL}/logout`, {}, {
        withCredentials: true
    });
    return result.data;
}

export const checkAuth_user = async () => {
    const result = await axios.get(`${URL}/checkUser`, { withCredentials: true });
    return result;
}