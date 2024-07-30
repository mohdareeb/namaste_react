import { LOGO_URL } from "../utils/constant";

import { useEffect, useState } from "react";


const Header=()=>{
    const [btn,setbtn] = useState("Login")
    return (
        <div className="Header">
            <div className="logo-container">
                <img className="logo" height ="50px"src={LOGO_URL} width ="70vpx" ></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
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