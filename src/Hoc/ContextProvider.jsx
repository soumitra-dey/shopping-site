import { createContext, useState } from "react";


export const AuthContext=createContext()

export default function ContextProvider({children}){
    const [auth,setauth]=useState(true)
    const [cart,setcart]=useState([])
    

    function removecart(e){
        let update=cart.filter((el)=>{
            return el.id!=e.id
        })
        setcart(update)
    }

    function handlequantity(e,x){
        let update=cart.map((el)=>{
            if (el.id==e.id){
                el.count+=x
                return el
            }
            return el
        })
        setcart(update)
    }

    function findall(x){
        return cart.find((e)=>e.id==x)
    }

    function totalbill(){
        let total=0
        cart.forEach((el)=>{
            total+=(el.count*el.price)
        })
        return total
    }

    

    return <AuthContext.Provider value={{auth,setauth,cart,setcart,removecart,handlequantity,findall,totalbill}}>{children}</AuthContext.Provider>

}


