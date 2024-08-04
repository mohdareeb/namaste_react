import {useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "./useRestrauntMenu";

const Restraunt=()=>{
    const {id} = useParams();
    console.log(id)
    const [show,setShow]=useState(false)
    const menu= useRestrauntMenu(id);
    console.log(menu);
    return (
        <div className="">
            <h1 className="text-center">Restraunt Name - Damy Data </h1>
            { 
            menu?.map((item,index) => {
                console.log(item);
                
                return (
                <div className="bg-slate-200 mx-auto my-4 p-6  shadow-lg w-56 text-center justify-between" key ={index}>
                    
                    <span className="flex justify-between">
                        <h2>{item.title}</h2>
                        <h2 onClick={(e)=>{
                            console.log("clicke");
                            show === false ? setShow(true) : setShow(false)
                        }}>
                            ⬇️
                        </h2>
                    </span>
                    
                        {
                        

                        show===true ? item?.itemCards?.map((item2,index)=>{
                            
                            return (
                                <div key ={index}>
                                <div className="flex justify-between">
                                    <h2 className="text-left">{item2.card.info.name}</h2>
                                    <h2> {item2.card.info.price/100}</h2>
                                </div>
                                <hr/>
                                </div>
                            )
                        
                        })
                        :
                        <h2></h2>
                        }

                    
                </div>
                )

            })
        }
           
         
            
            
                
        </div>
    )
}

export default Restraunt;