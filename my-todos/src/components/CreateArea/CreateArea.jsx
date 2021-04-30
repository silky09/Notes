import React, {useState} from 'react';
import './CreateArea.css';
import AddIcon from "@material-ui/icons/Add";

const CreateArea = () => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [add, setAdd] = useState();
  
  function onChangeValue(e) {
    const { name, value } = e.target;

    setNote(preValue => {
      return {
       ...preValue, [name]: value
     }
   })
  }

  function onClickValue(e) {
    e.preventDefault(); // used for not refreshing the screen
    setAdd();
  }
  return (
    <div>
      <form>
        <input onChange={onChangeValue} name="title" value={note.title} type="text" placeholder="Title" autoComplete="off" />
        <p>
          <textarea onChange={onChangeValue} name="content" value={note.content} placeholder="Take a note..." rows="3"></textarea>
        </p>
        <button onClick={onClickValue}><AddIcon /></button>
        
      </form>
    </div>
  )
}

export default CreateArea
