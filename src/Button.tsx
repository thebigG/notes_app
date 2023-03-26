import React, { Component } from 'react';


export interface ChildProps {
  callback: any;
  note: string
}

class SubmitNoteButton extends Component<ChildProps>  {
  render() {
    return <button 
            type="button"
            onClick={ () => {
            this.props.callback(this.props.note);
          }}
            className="button is-primary">
            Submit
          </button> 
  }
}

export default SubmitNoteButton; // Don’t forget to use export default!