import './App.css';

import SubmitNoteButton from './Button';
import NoteInput from './NoteInput';
import Note from './Note';
import React, { Component } from 'react';
import {useState} from 'react';

// function customFunction() {
//   fetch(`http://localhost:8080/new_note`,
//    {method: 'POST', 
//    body: JSON.stringify( {note:"New Note"})
//    } ).then(res =>    console.log(res))
//   .then((res: any) => {
//     // res is now an Actor
//   });
// }

function customFunction(new_note: string) {

  const [message, setMessage] = useState('');

  
  const handleMessageChange = event => {
    // 👇️ access textarea value
    setMessage(event.target.value);
    console.log(event.target.value);
  };


  fetch(`http://localhost:8080/new_note`,
   {
    method: 'POST', 
   body: JSON.stringify({note: new_note}),
   headers: {
    'Content-Type': 'application/json'
   }
   }).then(res => res.json()).
      then((json: any) => console.log(json));
}


function Notes() {
  return (
    <div className='container'>
      <div>
        < NoteInput/>
        <SubmitNoteButton callback={customFunction} note="New Note"/>
      </div>
      <div>
        < Note/>
      </div>
    </div>

  );
}

export default Notes;
