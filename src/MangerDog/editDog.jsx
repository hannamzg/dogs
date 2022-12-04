import { useState } from "react"

function EditDog({closeCallback, performEditCallback}) {
  
  const[editInp,setEditInp]=useState("");
  const handelInputChange = (e) => setEditInp(e.target.value);
  
  return(
    <div className="editClass" >
        <button className="closeTheEdit" onClick={() => closeCallback()}><i className="bi bi-x-circle"></i></button>
        <input type="text" className="editInput" onChange={handelInputChange} />
        <button onClick={()=>{performEditCallback(editInp)}}>add</button>
    </div>
  )  
}
export default EditDog;