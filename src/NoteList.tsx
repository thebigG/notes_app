import React, { Component } from 'react';
import SubmitNoteButton from './Button';
import Note from './Note';
import NoteInput from './NoteInput';

export interface ChildProps {
    callback: any;
    note: string
}

class NoteData{
    note: string;
    date: string;
    constructor(new_note: string, new_date: string){
        this.note = new_note;
        this.date = new_date;
    }

}


class NoteList extends Component{
//     constructor(props: any) {
//     super(props);
//     this.setState({
//         notes: []
//       });

      
//   }



  state = {
    notes: new Array<NoteData>() 
 };

 queryNotes = () => {
    fetch('http://localhost:8080/get_notes')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        this.setState({
            notes: data
        });
    });
}


  handleSubmit = (e: any) => {
    const newNote = e.target.value;

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

    console.log(formData);
    // newArray = this.state.notes.push(newNote);
    this.setState({
      name: this.state.notes.push(new NoteData(formData.get('note').toString(), Date().toString()))
    });
  }
    render(){
    return (
    <div className='container' >
    <div>
        <form method="post" onSubmit={this.handleSubmit}> 
        <SubmitNoteButton/>
            < NoteInput/>

        </form>
        <ul>
                    {
                    this.state.notes.map((new_note, index) => {
                        return <li key={index}>
                                < Note note={new_note.note} date={new_note.date}/>
                            </li>
                    })
                    }
                </ul>
    </div>
    </div>
    );
  }

}
  
export default NoteList; // Don’t forget to use export default!