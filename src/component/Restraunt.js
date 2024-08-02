import {useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "./useRestrauntMenu";

const Restraunt=()=>{
    const {id} = useParams();
    console.log(id)

    const { menu, name}= useRestrauntMenu(id);

    return (
        <div className="menu">
            <h1>Restraunt Name - {name} </h1>
            <h2>Menu</h2>
         {
            menu?.map((item,index)=>{
               
                return (<ul key={index}>
                    <li>{item.card.info.name} - RS.{item.card.info.price/100}</li>
                </ul>
                )
            })
         }
            
            
                
        </div>
    )
}

export default Restraunt;