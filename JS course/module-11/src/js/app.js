import { Notyf } from 'notyf';
import MicroModal from 'micromodal';
import noteTemplate from '../templates/notes.hbs';
import 'notyf/notyf.min.css';
import Notepad from './notepad-model';
import initialNotes from '../assets/notes.json';
import {refs, createTemplateOfNotes} from './view';
import { NOTIFICATION_MESSAGES } from './utils/constants';
 
export const notePad = new Notepad(initialNotes); 
const notyf = new Notyf();
MicroModal.init();
  
  //---- handlers functions ----
  
  // function adds note to list of notes
export  const addListItem = (listRef, note) => {
    const createdNote = noteTemplate(note);
    listRef.insertAdjacentHTML('beforeend', createdNote);
  }

  //function open modal
export  const handleOpenModal = () => {
    MicroModal.show('note-editor-modal')
  }
  
  // function creates new note
export  const createNote = event => {
    event.preventDefault();
  
    const titleValue = refs.noteTitle.value;
    const bodyValue = refs.noteBody.value;
  
    if(bodyValue.trim() === '' || titleValue.trim() === '') {
      return notyf.error(NOTIFICATION_MESSAGES.EDITOR_FIELDS_EMPTY);;
    }
  
    const newNote = notePad.createNewNote(titleValue, bodyValue)
    notePad.saveNote(newNote);
    refs.formNoteEditor.reset();
    addListItem(refs.noteList, newNote);
    notyf.success(NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS);
    MicroModal.close('note-editor-modal');
    
  }
  
  // function removes the note from list of notes
export  const removeListItem = (event) => {
    if (event.target.closest('button').dataset.action === 'delete-note') {
    const id = event.target.closest('li[data-id]')
    notePad.deleteNote(id);
    id.remove()
    notyf.success(NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS);
   } else return;
  }  


  const renderNoteList = (listRef, notes) => {
    const listItems = notes.map(note => createListItem(note));
    listRef.innerHTML = '';
    listRef.append(...listItems);
  }
  
  // function filters notes by input value
export  const filterNotes = event => {
    const filteredNotes = notePad.filterNotesByQuery(event.target.value);
    const notesTemplate = createTemplateOfNotes(filteredNotes);
    refs.noteList.innerHTML = '';
    refs.noteList.insertAdjacentHTML('beforeend', notesTemplate);
  };


  
  
  

  
  
  
  