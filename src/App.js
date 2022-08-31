import React, { useState } from 'react';
import NoteList from './components/NoteList/NoteList';
import './App.css';
import InputNewNote from './components/InputNewNote/InputNewNote';

function App() {

  const [notes, setNotes] = useState([]);

  const addNewNote = (newNote) => {
    setNotes([...notes, newNote])
  }

  return (
    <div className="App">
    <h1> My awesome Notes App</h1>

    <InputNewNote addNewNote={addNewNote} />
    <NoteList notes={notes}/>
    </div>
  );
}

export default App;
