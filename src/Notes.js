import './App.css';

import SubmitNoteButton from './Button';
import NoteInput from './NoteInput';
import Note from './Note';

function Notes() {
  return (
    <div className='container'>
      <div>
        < NoteInput/>
        <SubmitNoteButton/>
      </div>
      <div>
        < Note/>
      </div>
    </div>

  );
}

export default Notes;
