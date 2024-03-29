import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.note}</p>
      <button onClick={()=>{
        props.delete((prev)=>{
          return  prev.filter((ele,index)=>{
            console.log(index)
            console.log(props.id)
            return !(index === props.id)
          })
        })
      }}>
        <DeleteIcon/>
      </button>
    </div>
  );
}

export default Note;
