import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Filterpage from "./Filter";
import {AuthContext} from "../Hoc/ContextProvider"


export default function Products(){
    const [data, setdata]=useState([])
    const [fldata, setfldata]=useState([])
    const [fl, setfl]=useState(false)
    const {cart, setcart,handlequantity,removecart,findall}=useContext(AuthContext)
    
    
    useEffect(()=>{
        axios.get("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json")
        .then((e)=>{
            setdata(e.data)
            setfldata(e.data)
        })
    },[])

    

    

    return (
        <div className="md:w-5/6 m-auto pt-10 static -z-10">
            <div className="flex gap-2 m-auto w-fit relative">
                <div>
                    <input type="text" placeholder="Search products" className="border-b-2 w-40 md:w-80 border-gray-600 px-2 py-1 focus:outline-0" name="" id=""/>
                    <button className="bg-slate-600 p-1 text-white hover:bg-slate-500 duration-300">Search</button>
                </div>
                <button className="bg-slate-600 p-1 text-white hover:bg-slate-500 duration-300 flex md:hidden" onClick={()=>setfl(!fl)}>Filter</button>
                <div className={`absolute z-20 bg-white top-9 right-0 ${fl==true?"flex":"hidden"}`}><Filterpage data={data} setfldata={setfldata}/></div>
            </div>
            <div className="pt-10 flex justify-center md:justify-between">
                <div className="hidden md:flex">
                    <Filterpage data={data} setfldata={setfldata}/>
                </div>
                <div className="w-11/12 md:w-9/12 grid grid-cols-2 md:grid-cols-5 gap-3">
                    {
                        fldata?.map((el)=>(
                            <div key={el.id} className="p-3 pt-0 bg-gray-200 text-sm">
                                <p className="translate-y-5 bg-gray-100/50">{el.name}</p>
                                <img src={el.imageURL} alt="" className="w-full h-32"/>
                                <div className="flex justify-between">
                                    <p>Rs.{el.price}</p>
                                    <p>-</p>
                                    <p>{el.color}</p>
                                    <p>-</p>
                                    <p>{el.type}</p>
                                </div>
                                <button className={`w-full mt-1 bg-black p-1 text-white hover:bg-gray-900 duration-300 ${findall(el.id)!=undefined?"hidden":"inline-block"}`} onClick={()=>setcart((e)=>[...e,{...el,count:1}])}>Add to cart</button>
                                <div className={`justify-between items-center mt-1 ${findall(el.id)!=undefined?"flex":"hidden"}`}>
                                    <button className="w-6 bg-black p-1 text-white hover:bg-gray-900 duration-300 disabled:bg-slate-500 disabled:opacity-50" disabled={findall(el.id) && findall(el.id)["count"]==1} onClick={()=>handlequantity(el,-1)}>-</button>
                                    <p className="w-6 text-center">{findall(el.id) && findall(el.id)["count"]}</p>
                                    <button className="w-6 bg-black p-1 text-white hover:bg-gray-900 duration-300 disabled:bg-slate-500 disabled:opacity-50" disabled={findall(el.id) && findall(el.id)["count"]==findall(el.id)["quantity"]} onClick={()=>handlequantity(el,1)}>+</button>
                                    <button className="bg-black p-1 text-white hover:bg-gray-900 duration-300" onClick={()=>removecart(el)}><img src="https://i.ibb.co/Mpvz7mg/icons8-close-60.png" className="w-5"/></button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}