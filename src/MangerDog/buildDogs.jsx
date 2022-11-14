import CardItem from "./CardItem";

function BuildDogs({MyArr,onDelete,onEdit}) {
    return(
        <div style={{display:"flex", marginTop:"40px"}}>
            {MyArr.map((arr)=>{
                return <CardItem key={arr.id} {...arr} 
                onDelete={()=>onDelete(arr.id)} 
                onEdit={()=> onEdit(arr.id)}
                />                
            })}
        </div>
    )
}

export default BuildDogs;