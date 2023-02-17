import { createContext } from "react";
import { api } from "../services/api";
import { useState } from "react";
import { toast } from "react-toastify";

export const UserContext = createContext({})

export function UserProvider({children}){

    const [userData, setUserData] = useState(null);

    
    return (
        <UserContext.Provider value={{userData, setUserData}}>
            {children}
             </UserContext.Provider>
    )
}