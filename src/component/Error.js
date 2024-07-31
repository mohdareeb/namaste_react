import { useRouteError } from "react-router-dom";
const Error =()=>{
    const err = useRouteError();
    console.log(err);
    console.log(err.data)
    return(
        <h2>This is Error page ... {err.data}</h2>
    )
}

export default Error;