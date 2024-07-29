import { CON_URL } from "../utils/constant";
const RestrauntCard=(props)=>{
    const resobj=props.resobj;
    // const key =props.key;
    return (
        <div className="restraunt-card">
            <img  className ="res-logo" src={CON_URL + resobj.info.cloudinaryImageId} /> 
            <h3>{resobj.info.name}</h3>
            <h4>{resobj.info.avgRating} star : {resobj.info.sla.deliveryTime} mins</h4>
            <h4>{resobj.info.cuisines.join(",")} , {resobj.info.areaName + " , " + resobj.info.locality } </h4> 
        </div>
    )
}
export default RestrauntCard;
