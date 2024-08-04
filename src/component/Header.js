import { LOGO_URL } from "../utils/constant";

import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useInternetCheck from "./useInternetCheck";
import UserContext from "./UserContext";

const Header=()=>{
    const [btn,setbtn] = useState("Login")
    const status = useInternetCheck();
    const {loggedUser,setUsername} = useContext(UserContext);
    
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg mb-2"> 
            <div className="logo-container">
                <img className="w-12" height ="50px"src={LOGO_URL} width ="70vpx" ></img>
            </div>
            <div className="nav-items">
                <ul className="flex p-4 m-4">
                    {status===true ? <li className="m-4">Status : 🟢</li> : <li className="m-4">Status : 🔴</li>}
                    
                    <li className="m-4"><Link to="/">Home</Link></li>
                    <li className="m-4"><Link to ="/about">About Us</Link></li>
                    <li className="m-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="m-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="m-4"><Link>Cart</Link></li>
                    <li className="m-4"><Link to="/">{loggedUser}</Link></li>
                    <li className="m-4">
                        <button className="Login-Logout" onClick={()=>{
                            btn==="Login" ? setbtn("Logout") : setbtn("Login")
                        }} >{btn}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Header;