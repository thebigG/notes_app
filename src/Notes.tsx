import './App.css';

import SubmitNoteButton from './Button';
import NoteInput from './NoteInput';
import Note from './Note';
import React, { Component } from 'react';

function customFunction() {
  console.log("Write your note here:");
}


function Notes() {
  return (
    <div className='container'>
      <div>
        < NoteInput/>
        <SubmitNoteButton message={customFunction}/>
      </div>
      <div>
        < Note/>
      </div>
    </div>

  );
}

export default Notes;
