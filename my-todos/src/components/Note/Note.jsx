import React from 'react';
import './note.css';
import DeleteIcon from "@material-ui/icons/Delete";


const Note = (props) => {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <br/>
      <p>{props.content}</p>
      <button><DeleteIcon /></button>
    </div>
  )
}

export default Note
