// const heading = React.createElement("h1",{},"Hello World by React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

import React from "react"
import ReactDOM from "react-dom/client"

// const parent=React.createElement("div",{id:"parent"},
//     React.createElement("div",{id:"child"},
//         [React.createElement("h1",{},"Im h1"),
//          React.createElement("h2",{},"Im h2")   
//         ]
//     )
// );

const heading = (<h1>Namaste React</h1>)  // this react element 

// functional component
const Funct = ()=>{
    return (
        <div className="container">
            {heading}
            <h2>This is second heading</h2>
            <h3>This is third heading</h3>
        </div>
    )
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Funct/>)