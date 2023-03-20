import { useContext, useEffect, useState } from "react";
import {AuthContext} from "../Hoc/ContextProvider"
import { useNavigate } from "react-router-dom";



export default function Cart(){
    const {cart, setcart, handlequantity,removecart,totalbill}=useContext(AuthContext)
    let nav=useNavigate()

    function buyall(){
        alert("Thank you")
        setcart([])
        nav("/product")
    }

    return (
        <div>
            <div className="w-5/6 md:w-80 bg-gray-100 drop-shadow-md m-auto mt-10">
                <p className="text-xl text-center py-2">Cart</p>
                {
                    cart?.map((el)=>(
                        <div key={el.id} className="flex items-center p-1 even:bg-gray-300 text-sm justify-between">
                            <div className="flex w-32 items-center gap-1">
                                <img src={el.imageURL} alt="" className="w-10 h-10 ring-1"/>
                                <p className="text-sm">{el.name}</p>
                            </div>
                            <div className={`justify-between items-center gap-1 mt-1 flex`}>
                                <button className="w-6 bg-black text-white hover:bg-gray-900 duration-300 disabled:bg-slate-500 disabled:opacity-50" disabled={el["count"]==1} onClick={()=>handlequantity(el,-1)}>-</button>
                                <p className="w-6 text-center">{el["count"]}</p>
                                <button className="w-6 bg-black text-white hover:bg-gray-900 duration-300 disabled:bg-slate-500 disabled:opacity-50" disabled={el["count"]==el["quantity"]} onClick={()=>handlequantity(el,1)}>+</button>
                                <button className="bg-black px-1 text-white hover:bg-gray-900 duration-300" onClick={()=>removecart(el)}><img src="https://i.ibb.co/Mpvz7mg/icons8-close-60.png" className="w-5"/></button>
                            </div>
                            <p className="text-sm">Rs.{el.price*el["count"]}</p>
                        </div>
                    ))
                }
                <div className="flex justify-end text-xl font-medium">
                    <p className="border-t-2 border-black p-2 border-b-2">Total:</p>
                    <p className="border-t-2 border-black p-2 border-b-2">Rs.{totalbill()}</p>
                </div>
                <button className="bg-black w-full text-white mt-2 p-2 hover:bg-gray-600" onClick={()=>buyall()}>Buy now</button>
            </div>
        </div>
    )
}