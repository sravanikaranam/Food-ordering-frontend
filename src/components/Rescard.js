import { IMG_URL } from "../utilities/links";

const Rescard=(props)=>{
    const {resData}=props;
      
    return(
      <div className="w-[200px] p-4 m-4 rounded-lg bg-blue-100 hover:bg-pink-300">
          <img className="" src={IMG_URL + resData?.info?.cloudinaryImageId}/>
          <h3 className="font-bold text-lg">{resData?.info?.name}</h3>
          <h4>{resData?.info?.cuisines.join(" ,")}</h4>
          <h4>{resData?.info?.avgRating}</h4>
          <h4>{resData?.info?.sla?.deliveryTime}</h4>
  
      </div>
      
    );
  };

   export const RescardWithLabel=(Rescard)=>{
    return(
      (props) =>{
        <label>Promoted</label>,
        <Rescard  {...props}/>
      } 
    );
  };
  export default Rescard;