import {IMG_URL} from "../utilities/links";
const Itemlist=({items})=>{
    console.log(items);
    return(
        <div className="">
            {items.map((item)=>(
                <div className="my-4 border-b-black shadow-lg ">
                    <div className=" text-left text-xs font-normal flex justify-between">
                        <div className="w-9/12">
                            <span className=" text-md font-bold">{item?.card?.info?.name}</span>
                            <p className="">{item?.card?.info?.description}</p>
                        </div>
                        <div className="w-2/12 relative">
                            <img src={IMG_URL + item?.card?.info?.imageId}/>
                            <button className="  absolute bottom-0 rounded-md m-2 p-2 shadow font-bold text-white bg-black">Add +</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Itemlist;