// const heading = React.createElement("h1",{},"Hello World by React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./component/Header"
import Body from "./component/Body"
import { createBrowserRouter , RouterProvider ,Outlet } from "react-router-dom"
import About from "./component/About"
import Error from "./component/Error"
import Contact from "./component/Contact.js"
import Restraunt from "./component/Restraunt.js"


const App =()=>{
    return (
        <div className="Main">
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>,
                errorElement:<Error/>
            },
            {
                path:"/about",
                element:<About/>,
                errorElement:<Error/> 
            },
            {
                path:"/contact",
                element:<Contact/>,
                errorElement:<Error/>
            },
            {
                path:"/restraunt/:id",
                element:<Restraunt/>
            }
        ]
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter}/>);