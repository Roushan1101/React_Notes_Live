import React,{useState} from "react";
import axios from "axios";


function CreateNote(){

const [input,setInput]=useState({
    title:'',
    content:''
})

function handleChange(event){
    const {name,value}=event.target;
    setInput(prevInput=>{
        return{
            ...prevInput,
            [name]:value
        }
    })
}

function handleClick(event){
    event.preventDefault();
    console.log(input);
const newNote={
    title:input.title,
    content:input.content
}

    axios.post('http://localhost:3001/create', newNote);
}

return <div  className="container">
    <h1>Create Notes</h1>

    <form>
<div className="form-group">
    <input onChange={handleChange} name="title" autoComplete="off" value={input.title} placeholder="Your Name Here.." className="form-control">
    </input>
</div>

<div className="form-group">
    <input onChange={handleChange} name="content" autoComplete="off" value={input.content} placeholder="Note-content" className="form-control">

    </input>
</div>
<button  onClick={handleClick} className="btn btn-lg btn-info">
Add Note
</button>

    </form>
</div>
}
export default CreateNote;