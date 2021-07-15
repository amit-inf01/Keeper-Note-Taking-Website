import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
const [noteList,setNoteList] = useState([])

  return (
    <div>
      <Header />
      <CreateArea setList={setNoteList}/>
      {/* {console.log(noteList)} */}
      {noteList.map((ele,index)=>
      <Note delete={setNoteList} id={index} key={index} title={ele.title} note={ele.note} />
      )}
      <Footer />
    </div>
  );
}

export default App;
