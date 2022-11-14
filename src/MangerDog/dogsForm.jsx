import { useState } from "react";

function DogsForm({onSubmit =()=>{}}) {
    const[{input1,input2,input3},setInput] = useState({
        input1:"",
        input2:"",
        input3:""
    });

   
    const takeInputValue = (e) => setInput( (inputs)=>{
       return {
            ...inputs,
            [e.target.name] : e.target.value 
       }
    });

    const clearInputvalue = () => setInput(()=>{
       return {
            input1 : "",
            input2 : "",
            input3 : "",
       }
    }); 
      
    function submit() {
        onSubmit(input1,input2,input3);
        clearInputvalue(); 
    }

    return(
    <div id="DivToAddTodo">
        <input type="text" name="input1"  value={input1}  onChange={takeInputValue}  placeholder="Add The Dog" className="theAddInp"/>
        <input type="text" name="input2"   value={input2} onChange={takeInputValue} placeholder="Add The Age" className="theAddInp"/>
        <input type="text" name="input3"  value={input3}  onChange={takeInputValue}  placeholder="Add The Age" className="theAddInp"/>
        <button className="BtnAddIcon" onClick={()=>submit()}><i className="bi bi-plus-lg" id="addIcon"></i></button>  
    </div>
    )  
}

export default DogsForm;