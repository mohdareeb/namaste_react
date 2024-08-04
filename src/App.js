// const heading = React.createElement("h1",{},"Hello World by React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

import React ,{ lazy,Suspense, useContext, useState} from "react"
import ReactDOM from "react-dom/client"
import Header from "./component/Header"
import Body from "./component/Body"
import { createBrowserRouter , RouterProvider ,Outlet } from "react-router-dom"
import About from "./component/About"
import Error from "./component/Error"
import Contact from "./component/Contact.js"
import Restraunt from "./component/Restraunt.js"
import Shimmer from "./component/Shimmer.js"
import UserContext from "./component/UserContext.js"

const Grocery = lazy(()=>
                import("./component/Grocery.js"))

const App =()=>{
   const [username,setUsername] = useState("Default User");
   console.log(username)
    return (
            <UserContext.Provider value ={{loggedUser:username,setUsername}}>
                <div className="Main">
                    <Header/>
                    <Outlet/>
                </div>
            </UserContext.Provider>
       
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
                element:<Restraunt/>,
                errorElement:<Error/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>,
                errorElement:<Error/>
            }
        ]
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter}/>);