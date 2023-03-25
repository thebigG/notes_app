import React, { Component } from 'react';


export interface ChildProps {
  message: any;
}

class SubmitNoteButton extends Component<ChildProps>  {

  // constructor(props: any) {
  //   super(props);
  //   // this.state = {value: props.prop_data};
  // }
  render() {
    return <button 
            type="button"
            onClick={ () => {
            this.props.message();
          }}
            className="button is-primary">
            Submit
          </button> 
  }
}

export default SubmitNoteButton; // Don’t forget to use export default!