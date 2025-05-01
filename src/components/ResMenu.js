
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useResMenu from "../utilities/useResMenu";
import ResCategory from "./ResCategory";
import {useState} from "react";
const ResMenu=()=>{
    
    const {resId}=useParams();
    const resInfo=useResMenu(resId);
    const [showIndex,setshowIndex]=useState(null);
    if(!resInfo){
        return <Shimmer/>;
    }
    const {name,costForTwoMessage,cuisines}=resInfo?.cards[2]?.card?.card?.info;
    const Categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
    c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
   //console.log(Categories);
    return(
        <div className="text-center text-2xl font-bold">
            <h1>{name}</h1>
           
           <p className="text-sm"> {costForTwoMessage} -{cuisines.join(",")}</p>
           {
            Categories.map((category,index)=>(
                <ResCategory  key={category?.card?.card?.title} data={category?.card?.card}
                showItems={index===showIndex?true:false}
                showIndex={()=>{setshowIndex(index)}}
                />
            ))
           }
        </div>
    );
};
export default ResMenu;