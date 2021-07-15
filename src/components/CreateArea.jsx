import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';


function CreateArea(props) {
const [isClicked, setIsClicked] = useState(false)
const [Content,setContent] = useState({
  title: '',
  note: ''
})

function changeContent(event){
  const {name,value} = event.target;
   setContent((prev)=>{
    return {
       ...prev,
       [name]: value
     }
   })
}

function clickedArea(){
  setIsClicked(true)
}


  return (
    <div>
      <form className="create-note"  onSubmit={(event)=>{
         props.setList((prev)=>{
           return [
             ...prev,
             Content
           ]
         })
         setContent({
           title:'',
           note:''
         })
         event.preventDefault();
      }}>
      {isClicked && <input 
        onChange={changeContent} 
        name="title" placeholder="Title" 
        value={Content.title}
         /> }
        
        <textarea onClick={clickedArea} onChange={changeContent} name="note" placeholder="Take a note..."   rows={isClicked? 3:1} value={Content.note} />
        <button><AddIcon/></button>
      </form>
    </div>
  );
}

export default CreateArea;
