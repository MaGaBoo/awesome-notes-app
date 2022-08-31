import React from "react";
import './NoteList.css';

// inicializamos notes como array vacío para que pase el primer test)
const NoteList = ({ notes = [] }) => {
  return (
    <div className="notes-list" aria-label="note-list">
      {notes.map((note, index) => (
        <div key={index}>{note}</div>
      ))}
    </div>
  );
};

export default NoteList;
