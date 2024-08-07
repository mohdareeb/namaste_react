import { useState } from "react";
import { useSelector } from "react-redux";

const Cart =()=>{
    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems);
    let total=0;
    // const [total,setTotal]=useState(0);
    return (
        <div>
            <div className="bg-slate-300 m-2">
            <h1 className="font-bold">Your Order : </h1>
            {
                
                cartItems.map((item)=>{
                    {total=total + item.card.info.price/100}
                    return (
                        <ul className="border border-black m-2 flex justify-between">
                            <li>{item.card.info.name}</li>
                            <li>Rs.{item.card.info.price/100}</li>    
                        </ul>
                    )
                })
            }
            
            </div>
            {
                total !=0 ? 
                <ul className="border border-black m-2 flex justify-between bg-slate-300 m-2">
                    <li>Total</li>
                    <li>Rs.{total}</li>
                </ul>
                :<h2>You have not order anything yet</h2>
            }
            </div>
        
    )
}

export default Cart;