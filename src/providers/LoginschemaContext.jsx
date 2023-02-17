import { createContext } from "react";

export const LoginschemaContext = createContext({})

export function LoginschemaProvider({children}){

    const teste="teste"

    return (
        <LoginschemaContext.Provider> {children}</LoginschemaContext.Provider>
    )
}