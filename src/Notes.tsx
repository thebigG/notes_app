import './App.css';

import SubmitNoteButton from './Button';
import NoteInput from './NoteInput';
import Note from './Note';
import React, { Component } from 'react';
import {useState} from 'react';
import NoteList from './NoteList';


function Notes() {

  const [artists, setArtists] = useState([]);

  function handleSubmit(e: any) {
    console.log("handleSubmit");
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    fetch('http://localhost:8080/new_note', 
    { method: form.method, 
      body:  JSON.stringify({note: formData.get('note')}),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // // Or you can work with it as a plain object:
    // const formJson = formData.get('note');
    // console.log(formJson);
  }


  return (
    // <form method="post" onSubmit={handleSubmit}>
    <div className='container'>
      <div>
        <NoteList/>
        {/* <SubmitNoteButton/> */}
      </div>
    </div>
    // </form>

  );
}

export default Notes;
