import React, { Component } from 'react';

class NoteInput extends Component {
  render() {
   return <textarea name="description" defaultValue="Enter your note here."  rows={4} cols={40} />
  }
}

export default NoteInput; // Don’t forget to use export default!