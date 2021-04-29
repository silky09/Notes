import React from 'react';
import './CreateArea.css';

const CreateArea = () => {
  return (
    <div>
      <form>
        <input name="Title" type="text" placeholder="Title"  />
        <p>
          <textarea name="content" placeholder="Take a note..." rows="3"></textarea>
        </p>
        <button>Add</button>
        
      </form>
    </div>
  )
}

export default CreateArea
