import { createContext, useContext, useEffect, useState } from "react";
import { getAllCategories } from "../Services/categoryService";


const CategoryContext = createContext({});

export const CategoryProvider = ({children}) =>{

    const [categories, setCategory] = useState([]);

    useEffect(()=>{
        getCategories();
    },[])


    const getCategories = async() =>{
        try{
            const result = await getAllCategories();
            if(result.status === 200){
                setCategory(result.data);
            }
        } catch(error){
            throw error.response.data;
        }
    }


    return (
        <CategoryContext.Provider value={{getCategories, categories}}>
            {children}
        </CategoryContext.Provider>
    )

}

export const useCategoryContext = () =>{ return useContext(CategoryContext)}