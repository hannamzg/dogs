import { useState } from "react";
import { v4 as uuid } from "uuid";  // uuid giv me random id
import BuildDogs from "./buildDogs";
import DogsForm from "./dogsForm";
import EditDog from "./editDog";

function Dogs() {
    const[MyArr,setMyArr]= useState([]);
    const[editElement,setEditElement]= useState();
    const[selectedID, setSelectedID]= useState("");


    function mangMyArr(DogName,age,img){    
       setMyArr((arr)=>[
        ...arr,
        {
            id:uuid(),
            DogName,
            age,
            img,
            isComplete:false,
            createAt:new Date(),
        }
       ])
    };

    function removeItem(id) {
        setMyArr((dogs)=> dogs.filter((dog)=>{
            return dog.id !==id
        }));  
    }

    function closeEditElement() {
        setEditElement(null);
    }

    function performEditCallback(DogName) {
        setMyArr((dogs)=> dogs.map((dog)=>{
            if (dog.id === selectedID) {
                dog.DogName = DogName;
            }
            return dog;
        }));
        
        closeEditElement();
    }

    function editTheValue(id) {
        setSelectedID(id);
        console.log(id);
        setEditElement(<EditDog closeCallback={closeEditElement} performEditCallback={performEditCallback}/>);        
    }
    
    return(
        <>
            <DogsForm onSubmit={mangMyArr}/>
            <BuildDogs MyArr={MyArr} onDelete={removeItem} onEdit={editTheValue} />
            {editElement}
        </>
    )

}   
export default Dogs;