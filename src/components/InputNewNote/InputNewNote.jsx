import React, { useState } from "react";
import "./InputNewNote.css";

const InputNewNote = ({ addNewNote }) => {
  const [newNote, setNewNote] = useState("");

  return (
    <div className="input-new-note">
      <input
        type="text"
        placeholder="Add something..."
        value={newNote}
        onKeyDown={(e) => e.key === 'Enter' && addNewNote(newNote)} // TODO: Clear field after add  new note
        onChange={(e) => setNewNote(e.target.value)}
      ></input>
      <button onClick={() => addNewNote(newNote)}>Add</button>
    </div>
  );
};

export default InputNewNote;
