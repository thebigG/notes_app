import React, { Component } from 'react';

class SubmitNoteButton extends Component {
  render() {
    return <button 
            type="button" 
            onClick={ () => {
            console.log("Write your note here");

          }}
            className="button is-primary">
            Submit
          </button> 
  }
}

export default SubmitNoteButton; // Don’t forget to use export default!