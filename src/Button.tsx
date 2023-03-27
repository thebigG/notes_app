import React, { Component } from 'react';


// TODO:Don't think  I'll need this
export interface ChildProps {
  callback: any;
  note: string
}

class SubmitNoteButton extends Component  {
  render() {
    return <button 
            type="submit"
            className="button is-primary">
            Submit
          </button> 
  }
}

export default SubmitNoteButton; // Don’t forget to use export default!