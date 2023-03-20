import { useContext, useEffect, useState } from "react";
import {AuthContext} from "../Hoc/ContextProvider"
import { useNavigate } from "react-router-dom";



export default function Login(){
    const {auth,setauth}=useContext(AuthContext)
    let nav=useNavigate()
    const [data,setdata]=useState({
        userid:"",password:""
    })


    function handleupdate(e){
        setdata({
            ...data,
            [e.name]:e.value
        })
    }

    function handlesubmit(){
        if (data.userid=="user" && data.password=="user") {
            setauth(false)
        }
        nav("/product")
    }


    return (
        <div className="pt-20">
            <div className="flex flex-col gap-10 w-5/6 md:w-80 bg-slate-100 px-5 py-10 m-auto rounded-md drop-shadow-lg ring-1 ring-gray-300">
                <h1 className="font-medium text-4xl">Login</h1>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col">
                        <label htmlFor="userid">User Id</label>
                        <input type="text" name="userid" id="" placeholder="User Id" onChange={(e)=>handleupdate(e.target)} className="ring-1 drop-shadow-sm px-2 py-1 ring-gray-400 w-full focus:outline-0 focus:ring-blue-800 focus:drop-shadow-lg duration-300"/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" placeholder="Password" onChange={(e)=>handleupdate(e.target)} className="ring-1 drop-shadow-sm px-2 py-1 ring-gray-400 w-full focus:outline-0 focus:ring-blue-800 focus:drop-shadow-lg duration-300"/>
                    </div>
                    <button className="ring-1 px-2 py-1 ring-blue-800 w-full bg-cyan-400 hover:bg-cyan-300 duration-300 focus:outline-0 focus:drop-shadow-lg" onClick={()=>handlesubmit()}>Login</button>
                </div>
            </div>
        </div>
    )
}