import { createContext, useContext, useState, useEffect } from "react";
import {
    checkAuth_user,
    loginService,
    registerService
} from '../Services/authService';

const AuthContext = createContext({});

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null);
      const [error, setError] = useState(null);
       const [isAuthChecked, setIsAuthChecked] = useState(false);
    const [trigger, setTrigger] = useState(false);

     useEffect(() => {
        checkAuthUser();
    }, [trigger]);

    const login = async(email, password) =>{
        try{
            const userData = await loginService(email, password);
          
                setUser(userData);
           
            return userData;
        } catch(error){
            const message = error.response?.data?.message || 'Login failed';
            setError(message);
        }
    }

    const register = async(name, lastname, email, password) =>{
       try{
         const userData = await registerService(name, lastname, email, password);
        if(userData.status === 201){
            setUser(userData);
        }
        return userData;
       } catch(error){
            const message = error.response?.data?.message || 'Register Failed';
            setError(message);
        }
    }

     const checkAuthUser = async () => {
    try {
        const result = await checkAuth_user();

        if (result.status === 200) {
            setUser(result.data);
        } else {
            setUser(null);
        }

    } catch (error) {
        setUser(null);
    } finally {
        setIsAuthChecked(true);
    }
};

    return(
        <AuthContext.Provider value={{ user, error, login, register, checkAuthUser, isAuthChecked}}>
            {children}
        </AuthContext.Provider>
    )
};

 export const useAuthContext = () => {return useContext(AuthContext)};