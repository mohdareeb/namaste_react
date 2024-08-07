import {useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "./useRestrauntMenu";
import {CON_URL} from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const Restraunt=()=>{
    const dispatch = useDispatch();

    const handleAddItem=(item)=>{
        // dispatch an action 
        dispatch(addItem(item));
    }
    const {id} = useParams();
    console.log(id)
    const [show,setShow]=useState(false)
    const [hide,setHide]=useState(false);
    const menu= useRestrauntMenu(id);
    console.log(menu);
    return (
        <div className="">
            <h1 className="text-center">Restraunt Name - Damy Data </h1>
            { 
            menu?.map((item,index) => {
                console.log(item);
                
                return (
                <div className="bg-slate-200 mx-auto my-4 p-6  w-6/12 shadow-lg w-56 text-center justify-between" key ={index}>
                    
                    <span className="flex justify-between">
                        <h2 className="font-bold">{item.title}</h2>
                        <h2 onClick={(e)=>{
                            console.log("clicke");
                            show === false ? setShow(true) : setShow(false)
                        }}>
                            ⬇️
                        </h2>
                    </span>
                    
                        {
                        
                        
                        show===true ? item?.itemCards?.map((item2,index)=>{
                            
                            if(item2?.card?.info?.imageId)  return (
                                <div key ={index}>
                                <div className="flex justify-between border border-black m-2 p-4">
                                    <div>
                                    <h2 className="text-left">{item2.card.info.name}</h2>
                                    <h2> Rs.{item2.card.info.price/100}</h2>
                                    
                                    </div>
                                    <img src = {CON_URL + item2.card.info.imageId} className="w-40" />
                                    <div className=" flex justify-between">
                                        <button className="bg-black text-white h-8 p-2 rounded-lg" 
                                        onClick={()=>handleAddItem(item2)}
                                        >Add this </button>
                                    </div>
                                </div>
                                
                                <hr/>
                                </div>
                            )
                            else null;
                        })
                        :
                        null
                        }

                    
                </div>
                )

            })
        }
           
         
            
            
                
        </div>
    )
}

export default Restraunt;