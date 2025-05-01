import Rescard ,{RescardWithLabel} from "./Rescard";
import Shimmer from "./Shimmer";
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";
const Body=()=>{
  const [ListOfRest,setListOfRest]=useState([]);
  const [searchText,setsearchText]= useState("");
  const[filteredRes,setfilteredRes]=useState([]);
  const onlineStatus=useOnlineStatus();
 // const LabeledRescard=RescardWithLabel(Rescard);
  useEffect(()=>{fetchData();},[]);
  const fetchData= async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.5061743&lng=80.6480153&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json= await data.json();
    setListOfRest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(json);
  }
  if(onlineStatus===false){
    return(
      <h1>oops! you lost your internet connection</h1>
    )
  }
  //if( !ListOfRest || ListOfRest.length === 0){
  //  return <Shimmer />
  //}
 return( 
    <div className="body-container">
    <div className="flex m-2 p-4">
      <div className="m-2">
        <input className=" border border-s-black" value={searchText} onChange={(e)=>{
          setsearchText(e.target.value);
        }}>
        </input>
        <button  className="px-4 py-1   rounded-md shadow-sm bg-blue-100 " onClick={()=>{
          const searchedRes=ListOfRest.filter((rest)=>rest?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
          setfilteredRes(searchedRes);
        }}>Search
        </button>
      </div>
      <div className="px-4 py-1 m-2 shadow-sm rounded-md bg-green-200 " >
      <button className="filter-btn" onClick={()=>{
        const ratedres=ListOfRest.filter((res)=>res?.info?.avgRating >4);
        setfilteredRes(ratedres);
      }}>Top Rated Restaurants</button>
      </div>
    </div>
     
    <div className="flex flex-wrap">
      {
        filteredRes.map((res)=>(
        <Link  key={res?.info?.id} to={"/restaurants/"+res?.info?.id}>
         <Rescard resData={res}/> 
        </Link>
          )
        )
      }

    </div>
    </div>
 );
};
export default Body;






