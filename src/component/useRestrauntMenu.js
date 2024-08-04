import {useState,useEffect} from "react";
import useInternetCheck from "./useInternetCheck";
import RestrauntItemList from "./RestrauntItemList";

const useRestrauntMenu = (id)=>{
        // const [resInfo,setResInfo]=useState("");
        const [menu,setMenu]=useState();
        const [name,setResname]=useState("");
        console.log("Hii");
        console.log("new id",id);
        let resname="";
        useEffect(()=>{
            fetchMenu();
        },[id])

        const fetchMenu=async()=>{
                console.log("inside fetch")
                const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.8268625&lng=78.77524760000001&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER");
                const json = await data.json();
                console.log("this is json ",json);
                setResname(json?.data?.cards[0]?.card?.card?.text);
                // console.log(resname);
                // console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.slice(2))
                const arr=json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.slice(2);
                // arr.filter((item)=> item?.card?.card?.['@type']==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
                console.log("This is arr : ",arr);
                const arr2=[]
                arr?.map((item)=>{
                    console.log("this is itemcard " ,item?.card?.card)
                    const name = item?.card?.card?.title;
                    arr2.push(item.card.card);
                    // item?.card?.card?.map((item2)=>{
                    //     console.log(item2);
                    // })
                    // item?.card?.card?.itemCards?.map((item2,index)=>{
                        // console.log(item2)
                        // arr2.push(item2)

                        // <RestrauntItemList name ={name} item={item2} key ={index}/>
                    // })
                    
                })
                console.log(arr2);
                setMenu(arr2);
        }
        
        console.log("this is name ",name);
        return menu;
    
}

export default useRestrauntMenu;