import {useState,useEffect} from "react";
import {MENU_API} from "../utilities/links";

const useResMenu=(resId)=>{
  useEffect(()=>{
    fetchData();
  },[]); 
  const [resInfo,setResInfo]=useState(null);
  const fetchData= async()=>{
    const data=await fetch(MENU_API + resId);
    const json=await data.json();
    setResInfo(json.data);

  } ;


    return resInfo;
};
export default useResMenu;