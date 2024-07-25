// const heading = React.createElement("h1",{},"Hello World by React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"Im h1"),
         React.createElement("h2",{},"Im h2")   
        ]
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)