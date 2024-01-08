import { useState } from "react";

const Input = () => {

const[name, setName] = useState('')

const handleSave = () =>{
    localStorage.setItem("User Data", name)
}
    return(
      <div>
        <input type="text" value={name} aria-label="Enter Name" onChange={(event)=>setName(event.target.value)}/>
        <button onClick={()=>{handleSave()}}>Save</button>
      </div>
    )
} 

export default Input;