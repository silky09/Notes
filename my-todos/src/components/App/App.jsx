import React, { useState } from 'react'
import Header from '../Header/Header'
import CreateArea from '../CreateArea/CreateArea'
import Note from '../Note/Note'
import Footer from '../Footer/Footer'

const App = () => {
  const [addItem, setAddItem] = useState([]);

  function addNote(note) {
    // alert("i am a note");
    setAddItem((prevData) => {
      return [...prevData, note]; // returning array
    });
    console.log(note);
  };
    return (
        <div>
        <Header />
        <CreateArea
          passNote={addNote} />
           {/* passNote is a props */}
        
        {addItem.map((val, index)=>{ // map contains 4 values
          return <Note
          key={index}
          id={index}
          title={val.title}
          content={val.content}
          />
        })}
        <Footer />
        </div>
    )
}

export default App
