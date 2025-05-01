import Itemlist from "./Itemlist";

const ResCategory=({data,showItems,showIndex})=>{ 
//console.log(data);

const handleClick=()=>{
showIndex();
}
return (
    <div className="w-6/12  mx-auto my-3 shadow-lg bg-gray-50 rounded-lg cursor-pointer"onClick={handleClick}>
        <div className="">
            <span className="text-xl">{data?.title} - ({data?.itemCards?.length})</span>
            
        </div>
        <div>
        {showItems && <Itemlist items={data?.itemCards}/>}
        </div>
    </div>
)
}
export default ResCategory;