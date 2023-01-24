import { createContext, useContext } from "react"

export const UserContext = createContext(null as any)
export function useUserContext(){
    const context = useContext(UserContext)
        if(context === undefined){
            throw new Error("fora do contexto")
        }
        return context
}