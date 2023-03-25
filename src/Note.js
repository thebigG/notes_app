import React, { Component } from 'react';

class Note extends Component {
  render() {
   return <div className="message">
   <div className="message-header">
     <p>{Date().toString()}</p>
     <button className="delete" aria-label="delete"></button>
   </div>
   <div className="message-body">
    Example note
   </div>
 </div>
  }
}

export default Note; // Don’t forget to use export default!