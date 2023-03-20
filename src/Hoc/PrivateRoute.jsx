import { AuthContext } from "./ContextProvider";
import { useContext } from "react";
import { Navigate } from "react-router-dom";



export default function PrivateRoute({children}){
    const {auth}=useContext(AuthContext)
    if (auth) {
        return <Navigate to="/"/>
    } else {
        return children
    }


}