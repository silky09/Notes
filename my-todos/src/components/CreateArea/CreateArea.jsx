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

  // const [add, setAdd] = useState();

   function addEvent(e) {
     e.preventDefault(); // whenever we press the submit button it refresh the page so use >>> e.preventDefault(); for not refreshing the screen
  //   setAdd();
     props.passNote(note);
     setNote({
       title: "",
       content: "",
     });
   };

  const [isExpanded, setExpanded] = useState(false); // for expanding input area

  function expand() {
    setExpanded(true);
  }
  return (
    <div>
      <form className="create-note">
        {isExpanded ? <input name="title" type="text" onChange={InputEvent}
        value={note.title} placeholder="Title" autoComplete="off" /> : null}
        <p>
          <textarea
            onClick={expand}
            onChange={InputEvent} // used for hold the value 
            value={note.content}
            name="content"
            placeholder="Take a note..."
            rows={isExpanded ? 3 : 1}>
            </textarea>
        </p>
        {/* isExpanded is set to false, so add icon will display after click on textarea  */}
        <Zoom in={isExpanded}>
          <Fab onClick={addEvent}><AddIcon /></Fab> 
        </Zoom>
      </form>
    </div>
  )
}

export default CreateArea
