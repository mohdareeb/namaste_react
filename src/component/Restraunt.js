import {useEffect,useState} from "react";
import { useParams } from "react-router-dom";

const Restraunt=()=>{
    const [resinfo,setResInfo] = useState(null);
    const [iteminfo,setItemInfo] = useState(null);
    const [resname,setResname] = useState("");
    const {id} = useParams();
    console.log(id)
    
    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu=async()=>{
        
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.8268625&lng=78.77524760000001&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        
        setResname(json?.data?.cards[0]?.card?.card?.text)
        // console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.slice(2))
        const arr=json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.slice(2);
        const arr2=[]
        arr?.map((item)=>{
            console.log(item?.card?.card?.itemCards)
            item?.card?.card?.itemCards?.map((item2)=>{
                // console.log(item2)
                arr2.push(item2)
            })
            
        })

        // console.log(arr2)
        setResInfo(arr2)
        
    }

    return (
        <div className="menu">
            <h1>Restraunt Name - {resname} </h1>
            <h2>Menu</h2>
         {
            resinfo?.map((item)=>{
               
                return (<ul>
                    {/* {console.log(item.card.info.name)} */}
                    <li>{item.card.info.name} - RS.{item.card.info.price/100}</li>
                </ul>
                )
            })
         }
            
            
                
        </div>
    )
}

export default Restraunt;