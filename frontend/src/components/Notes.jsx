import React,{useEffect,useState} from "react";
import "./Notes.css";
function Notes(){

    const [notes,setNotes]=useState([{
        title:'',
        content:''
    }])

    useEffect(()=>{
        fetch("/notes").then(res=>{
            if(res.ok){
            return res.json()
            }
        }).then(jsonRes => setNotes(jsonRes));
    });

return <div>
    <h1>Notes Page</h1>
   
   {
      
       notes.map(note=>
           <div>
               <ul><p class="tit"># {note.title} </p><p class="cont">{note.content}</p>
                   </ul>
               
           </div>
       )
       
   }
    

    
    
</div>
}

export default Notes;