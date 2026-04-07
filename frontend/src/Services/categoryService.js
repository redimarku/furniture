import axios from 'axios';

const URL = "http://localhost:3000/categories";

export const getAllCategories = async() =>{
    const result = await axios.get(`${URL}/all`);
    return result;
}

export const getProductsOfCategory = async (id) => {
    const result = await axios.get(`${URL}/${id}/products`);
    return result;
};
export const getCategoryById = async (id) => {
    const { data } = await axios.get(`${URL}/${id}`);
    return data;
};


export const createCategory = async (category) => {
    const { data } = await axios.post(`${URL}/create`, category);
    return data;
};


export const updateCategory = async (id, category) => {
    const { data } = await axios.put(`${URL}/${id}`, category);
    return data;
};


export const deleteCategory = async (id) => {
    const { data } = await axios.delete(`${URL}/${id}`);
    return data;
};