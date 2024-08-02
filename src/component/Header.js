import { LOGO_URL } from "../utils/constant";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useInternetCheck from "./useInternetCheck";

const Header=()=>{
    const [btn,setbtn] = useState("Login")
    const status = useInternetCheck();
    return (
        <div className="Header"> 
            <div className="logo-container">
                <img className="logo" height ="50px"src={LOGO_URL} width ="70vpx" ></img>
            </div>
            <div className="nav-items">
                <ul>
                    {status===true ? <li>Status : 🟢</li> : <li>Status : 🔴</li>}
                    
                    <li><Link to="/">Home</Link></li>
                    <li><Link to ="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li><Link>Cart</Link></li>
                    <li>
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