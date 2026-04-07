import axios from "axios";


const URL = 'http://localhost:3000/product'

const getAllProducts = async() =>{
    const result = await axios.get(`${URL}/all`)
}

const createProduct = async()=>{
    
}