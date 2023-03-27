import React, { Component } from 'react';


export interface ChildProps {
  note: string
  date: string
}

class Note extends Component<ChildProps> {


  render() {
   return <div className="message">
   <div className="message-header">
     <p>{this.props.date}</p>
     <button className="delete" aria-label="delete"></button>
   </div>
   <div className="message-body">
    {this.props.note}
   </div>
 </div>
  }
}

export default Note; // Don’t forget to use export default!