import RestrauntCard from "./RestrauntCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useInternetCheck from "./useInternetCheck";

const Body =()=>{

    let [reslist,set_reslist] = useState([]);
    const [search_list,set_search_list]=useState([]);
    const [search,setsearch] = useState();
    // console.log(reslist);
    let upadtes_reslist=[];
    let search_result=[];
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData =async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.8268625&lng=78.77524760000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        console.log("This is reslist ", reslist)
        set_reslist(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); // This is called optional chaining
        set_search_list(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    const status = useInternetCheck();
    if (status===false) return <h1>Check your Internet Connection !!!</h1>
    if(reslist.length ===0) return <Shimmer/>
    return (
        <div className="body">
            <div className="flex">
                <div className="search-btn">
                    <input className="border border-solid border-black" type="text" value ={search} onChange={(e)=>{
                            setsearch(e.target.value)  // evry time useState variable changes the whole component re render again
                    }}>
                    </input> 
                    
                    <button className="px-4 bg-green-100 m-4" onClick={()=>{
                        
                        reslist.filter((res)=>{
                            if(res?.info?.name?.toLowerCase().includes(search?.toLowerCase())) search_result.push(res)
                        })
                        set_search_list(search_result)
                    }}
                    
                    >Click here to search</button>
                </div>
                <div className="filter-btn p-4">
                    <button className="btn"
                            onClick={()=>{
                                reslist.filter((res)=>{
                                    if(res.info.avgRating>4) upadtes_reslist.push(res)
                                })
                                set_search_list(upadtes_reslist);
                            }}
                    >Click here to filter</button>
                </div>
            </div>
            <div className="flex flex-wrap">
                
                {
                    search_list.map((res_details) => (
                        <Link key ={res_details.info.id} to={"/restraunt/" + res_details.info.id}><RestrauntCard resobj={res_details}  /></Link>
                    ))
                }       
                
            </div>
        </div>
        
)
}

export default Body;