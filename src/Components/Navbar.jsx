import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import {AuthContext} from "../Hoc/ContextProvider"


export default function Navbar(){
    const [mainmenu,setmainmenu]=useState(false)
    const [profilemenu,setprofilemenu]=useState(false)
    const {auth,setauth}=useContext(AuthContext)

    function logout(){
        setauth(true)
        setprofilemenu(false)
    }

    return (
        <div className="h-16">
            <div className="bg-gray-800 fixed w-full z-10">
                <div className=" flex justify-between items-center px-5 md:px-10 py-4">
                    <button className="px-1 py-1 border-gray-400 border-2 flex md:hidden focus:border-white focus:bg-gray-700" onClick={()=>setmainmenu(!mainmenu)}>
                        <svg className="block h-6 w-6" fill="none" color="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                    <img src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png" alt="" className="w-10 h-10 px-1 py-1 bg-cyan-50 rounded drop-shadow-md"/>
                    <div className="text-gray-200 flex space-x-2 md:space-x-4 font-medium text-lg md:text-xl">
                        <Link to="/product" className="md:flex hidden hover:text-blue-300 duration-500">Home</Link>
                        <Link to="/product" className="md:flex hidden hover:text-blue-300 duration-500">Product</Link>
                        <Link to="/cart" className="md:flex hidden hover:text-blue-300 duration-500">Cart</Link>
                        <img src="https://randomuser.me/api/portraits/med/men/75.jpg" className={`h-8 rounded-full ${auth==false?"flex":"hidden"}`} alt="" onClick={()=>setprofilemenu(!profilemenu)}/>
                        <div className={`flex-col absolute right-7 -bottom-1/2 drop-shadow-lg bg-white text-black text-sm font-normal z-50 rounded ${profilemenu==true?"flex":"hidden"}`}>
                            <p href="" className="px-3 py-1 rounded hover:bg-blue-100">View Profile</p>
                            <p href="" className="px-3 py-1 rounded hover:bg-blue-100" onClick={()=>logout()}>Logout</p>
                        </div>
                        <Link to="/" className={`${auth==false?"hidden":"flex"}`}>Login</Link>
                    </div>
                </div>
                <div className={`flex-col text-gray-200 md:hidden absolute bg-gray-800 w-full z-30 ${mainmenu==true?"flex":"hidden"}`}>
                    <Link to="/product" className="px-5 py-1 hover:bg-gray-700">Home</Link>
                    <Link to="/product" className="px-5 py-1 hover:bg-gray-700">Product</Link>
                    <Link to="/cart" className="px-5 py-1 hover:bg-gray-700">Cart</Link>
                </div>
            </div>
        </div>
    )
}