import {useState,useEffect} from "react";
import useInternetCheck from "./useInternetCheck";

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
                const arr2=[]
                arr?.map((item)=>{
                    console.log(item?.card?.card?.itemCards)
                    item?.card?.card?.itemCards?.map((item2)=>{
                        // console.log(item2)
                        arr2.push(item2)
                    })
                    
                })
                setMenu(arr2);
        }
        
        console.log("this is name ",name);
        return {menu,name};
    
}

export default useRestrauntMenu;