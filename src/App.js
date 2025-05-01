import React from "react";
import ReactDOM from "react-dom/client";
import Body from  "./components/Body";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import ResMenu from "./components/ResMenu";
const AppLayout=()=>{
    return(
        <div className="app-container">
        <Header/>,
        <Outlet/>,
        </div>
    );
};
const approuter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        
        children:[
            
            {
            path:"/",
            element:<Body/>,
            },
            {
            path:"/about",
            element:<About/>,
            },
            {
            path:"/contact",
            element:<Contact/>,
            },
            {
            path:"/restaurants/:resId",
            element:<ResMenu/>,
            },
        ]
        
    },
    
])



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter}/>);