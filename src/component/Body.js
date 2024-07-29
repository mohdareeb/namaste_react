import RestrauntCard from "./RestrauntCard";
import resobj from "../utils/mockData";
import { useState } from "react";


const Body =()=>{
    let [reslist,set_reslist] = useState(resobj);
    console.log(reslist);
    let upadtes_reslist=[];
    return (
        <div className="body">
        
            <div className="filter-btn">
                <button className="btn"
                        onClick={()=>{
                            reslist.filter((res)=>{
                                if(res.info.avgRating>4) upadtes_reslist.push(res)
                            })
                            set_reslist(upadtes_reslist);
                        }}
                >Click here to filter</button>
            </div>
            <div className="res-card">
                
                {
                    reslist.map((res_details) => (
                        <RestrauntCard resobj={res_details} key ={res_details.info.id} />
                    ))
                }       
                
            </div>
        </div>
        
)
}

export default Body;