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
   // console.log("note");
  };

  function deleteItem(id) {
    //console.log("deleted");
    setAddItem((prevData) => {
      return [...prevData.filter((currentVal, index) => {
        return index !== id 
      })]
    })
  }
    return (
        <div>
        <Header />
        <CreateArea
          passNote={addNote} />
           {/* passNote is a props */}
        
        { addItem.map((val, index)=>{ // map contains 4 values
          return <Note
          key={index}
          id={index}
          title={val.title}
          content={val.content}
          onDelete={deleteItem}
          />
        })}
        <Footer />
        </div>
    )
}

export default App
