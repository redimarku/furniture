import axios from 'axios';

const URL = 'http://localhost:3000/users';

export const createUserService = async() =>{
    const result = await axios.get(`${URL}/all`);
    return result;
}