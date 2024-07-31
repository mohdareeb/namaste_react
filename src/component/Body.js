import RestrauntCard from "./RestrauntCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
 

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
    if(reslist.length ===0) return <Shimmer/>
    return (
        <div className="body">
            <div className="search-btn">
                <input type="text" value ={search} onChange={(e)=>{
                        setsearch(e.target.value)  // evry time useState variable changes the whole component re render again
                }}>
                </input> 
                
                <button className="search-btn" onClick={()=>{
                    
                    reslist.filter((res)=>{
                        if(res?.info?.name?.toLowerCase().includes(search?.toLowerCase())) search_result.push(res)
                    })
                     set_search_list(search_result)
                }}
                
                >Click here to search</button>
            </div>
            <div className="filter-btn">
                <button className="btn"
                        onClick={()=>{
                            reslist.filter((res)=>{
                                if(res.info.avgRating>4) upadtes_reslist.push(res)
                            })
                            set_search_list(upadtes_reslist);
                        }}
                >Click here to filter</button>
            </div>
            <div className="res-card">
                
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