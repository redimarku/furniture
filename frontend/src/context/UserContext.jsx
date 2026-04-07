import { createContext, useContext, useState, useEffect } from "react";
import { createUserService } from "../Services/userService";


const UserContext = createContext({});

export const UserProvider = ({children}) =>{
    const [users, setUsers] = useState([]);

    useEffect(( )=>{
        getAllUsers();
    },[]);

    const getAllUsers = async() =>{
        try{
            const result = await createUserService();
             if (result.status === 200) {
                setUsers(result.data);
            }
        } catch(error){
             console.error("Error fetching users:", error);
        }
    }

    return(
        <UserContext.Provider value={{users, getAllUsers}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext  = () =>{return useContext(UserContext)};
