import React, {useState} from 'react';
import './CreateArea.css';
import AddIcon from "@material-ui/icons/Add";
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
 // Fab --> floating action button
// for adding icons
// npm install @material-ui / core
// npm install @material-ui/icons


const CreateArea = (props) => {
  const [note, setNote] = useState({  // this const keeps track the title and content
    title: "",
    content: "",
  });
  
   function InputEvent(e) {
     const { name, value } = e.target;  // de-structured object
     setNote ((prevData) => {
       return {
         ...prevData,
         [name]: value // setNote receive the previous data(existing notes)
       };
        
     })
     // console.log(note);
   }

  

  function addEvent(e) {
     if(note.title !== "" || note.content!== "" ){ // used this condition so that empty notes can be added
     e.preventDefault(); // whenever we press the submit button it refresh the page so use >>> e.preventDefault(); for not refreshing the screen
     props.passNote(note);
     setNote({
       title: "",
       content: "",
     });
   };
  }
  const [expand, setExpand] = useState(false); // for expanding input area

  function expandIt() {
    setExpand(true);
  }
  // function backToNormal() {
  //   setExpand(false);
  // }
 
  return (
    <div>
      <form className="create-note" >
        {expand ? <input name="title" type="text" onChange={InputEvent}
        value={note.title} placeholder="Title" autoComplete="on" /> : null}
        <p>
          <textarea
            onClick={expandIt}
            onChange={InputEvent} // used for hold the value 
            value={note.content}
            name="content"
            maxlength = {100}
            placeholder="Take a note..."
            rows={expand ? 3 : 1
            }
            >
            </textarea>
        </p>
        {/* expand is set to false, so add icon will display after click on textarea  */}
        <Zoom in={expand}>
          <Fab onClick={addEvent}><AddIcon /></Fab> 
        </Zoom>
      </form>
    </div>
  )
}

export default CreateArea
