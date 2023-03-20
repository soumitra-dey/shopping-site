import { Route, Routes } from "react-router-dom";
import Cart from "../Components/Cart";
import Login from "../Components/Login";
import Products from "../Components/products";
import PrivateRoute from "../Hoc/PrivateRoute";




export default function AllRoute(){


    return (
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/product" element={<PrivateRoute><Products/></PrivateRoute>}></Route>
            <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>}></Route>
        </Routes>
    )
}