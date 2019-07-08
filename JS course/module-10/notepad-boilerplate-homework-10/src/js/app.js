import Notepad from './notepad-model';
import initialNotes from '../assets/notes.json';
import {createListItem, renderNoteList} from './view';
import {noteList, formNoteEditor, searchInput, noteTitle, noteBody } from './html-el-const'

  const notePad = new Notepad(initialNotes);
  
  renderNoteList(noteList, notePad.notes);
  
  
  //---- handlers functions ----
  
  // function adds note to list of notes
  const addListItem = (listRef, note) => {
    const createdNote = createListItem(note);
    listRef.append(createdNote);
  }
  
  // function creates new note
  const createNote = event => {
    event.preventDefault();
  
    const titleValue = noteTitle.value;
    const bodyValue = noteBody.value;
    const message = 'Необходимо заполнить все поля!';
  
    if(bodyValue.trim() === '' || titleValue.trim() === '') {
      alert(message)
      return;
    }
  
    const newNote = notePad.createNewNote(titleValue, bodyValue)
    notePad.saveNote(newNote);
    formNoteEditor.reset();
    addListItem(noteList, newNote)
  }
  
  
  
  // function removes the note from list of notes
  const removeListItem = (event) => {
    if (event.target.closest('button').dataset.action === 'delete-note') {
    const id = event.target.closest('li[data-id]')
    notePad.deleteNote(id);
    id.remove()
   } else return;
  }  
  
  // function filters notes by input value
  const filterNotes = event => {
    const filteredNotes = notePad.filterNotesByQuery(event.target.value);
    renderNoteList(noteList, filteredNotes);
  };
  
  
  formNoteEditor.addEventListener('submit', createNote);
  noteList.addEventListener('click', removeListItem);
  searchInput.addEventListener('input', filterNotes);
  
  
  
  