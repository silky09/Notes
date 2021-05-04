import React, {useState} from 'react';
import './CreateArea.css';
import AddIcon from "@material-ui/icons/Add";
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
 // Fab --> floating action button
// for adding icons
// npm install @material-ui / core
// npm install @material-ui/icons


const CreateArea = () => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  
  function onChangeValue(e) {
    const { name, value } = e.target;
    setNote(preValue => {
      return {
       ...preValue, [name]: value
     }
   })
  }
  const [add, setAdd] = useState();

  function submitNote(e) {
    e.preventDefault(); // used for not refreshing the screen
    setAdd();
  }

  const [isExpanded, setExpanded] = useState(false);

  function expand() {
    setExpanded(true);
  }
  return (
    <div>
      <form className="create-note">
        {isExpanded ? <input onChange={onChangeValue} name="title" value={note.title} type="text" placeholder="Title" autoComplete="off" /> : null}
        <p>
          <textarea
            onChange={onChangeValue}
            onClick={expand}
            name="content"
            value={note.content}
            placeholder="Take a note..."
            rows={isExpanded ? 3 : 1}>
            </textarea>
        </p>
        <Zoom in={isExpanded}> { /* isExpanded is set to false, so add icon will display after click on textarea */ }
          <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  )
}

export default CreateArea
