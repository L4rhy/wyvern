import { UserContext } from "./userContext"
import {useState} from "react"
import {typeUsuario} from "../pages/api/types"
type userProviderProps = {
    children: any
}

export default function userProvider(props:userProviderProps){
    const [usuario, setUsuario]=useState<typeUsuario>()
    const [logged, setLogged] = useState(false)
    const atualizaUsuario = (novoUsuario: typeUsuario)=>{
        setUsuario(novoUsuario)
    }
    return(
        <UserContext.Provider value={{
            usuario, atualizaUsuario, logged,setLogged
        }}>
            {props.children}
        </UserContext.Provider>
    )
}