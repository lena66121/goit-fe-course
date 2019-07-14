import Notepad from './notepad-model';
import initialNotes from '../assets/notes.json';
import {createListItem, renderNoteList, refs} from './view';
 
export const notePad = new Notepad(initialNotes); 
  
  //---- handlers functions ----
  
  // function adds note to list of notes
export  const addListItem = (listRef, note) => {
    const createdNote = createListItem(note);
    listRef.append(createdNote);
  }
  
  // function creates new note
export  const createNote = event => {
    event.preventDefault();
  
    const titleValue = refs.noteTitle.value;
    const bodyValue = refs.noteBody.value;
    const message = 'Необходимо заполнить все поля!';
  
    if(bodyValue.trim() === '' || titleValue.trim() === '') {
      alert(message)
      return;
    }
  
    const newNote = notePad.createNewNote(titleValue, bodyValue)
    notePad.saveNote(newNote);
    refs.formNoteEditor.reset();
    addListItem(refs.noteList, newNote)
  }
  
  // function removes the note from list of notes
export  const removeListItem = (event) => {
    if (event.target.closest('button').dataset.action === 'delete-note') {
    const id = event.target.closest('li[data-id]')
    notePad.deleteNote(id);
    id.remove()
   } else return;
  }  
  
  // function filters notes by input value
export  const filterNotes = event => {
    const filteredNotes = notePad.filterNotesByQuery(event.target.value);
    renderNoteList(refs.noteList, filteredNotes);
  };
  
  

  
  
  
  