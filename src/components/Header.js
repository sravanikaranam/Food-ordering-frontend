import {LOGO_URL} from "../utilities/links";
import {useState} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from '../utilities/useOnlineStatus';
const Header=()=>{
    const[btnName,setbtnName]=useState("login");
    const onlinestatus=useOnlineStatus();
    return(
        <div className="flex bg-pink-200 justify-between border border-s-black shadow-lg rounded-lg">
            <div className="">
                <img className="w-56"  src={LOGO_URL}/>         
            </div>
            <div className="flex">
                <ul className="flex p-6 m-4">
                    <li className="p-2 m-2" >Online Status:{onlinestatus?"online":"offline"}</li>
                   <li className="p-2 m-2"><Link to="/">Home</Link></li> 
                   <li className="p-2 m-2"><Link to="/about">About us</Link></li> 
                   <li className="p-2 m-2">Cart</li> 
                   <li className="p-2 m-2"><Link to="/contact">Contact us</Link></li> 
                   <li className="py-2 px-3 m-2  border bg-blue-50"><button className="login" onClick={()=>{
                        btnName==="login"?setbtnName("logout"):setbtnName("login")
                   }}>{btnName}</button></li>
                </ul>
            </div>
        </div>
    );
};
export default Header;