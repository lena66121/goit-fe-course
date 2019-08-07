import noteTemplate from '../templates/notes.hbs';
import {initNotes} from './app'


export const refs = {
  noteList: document.querySelector('.note-list'),
  formNoteEditor: document.querySelector('.note-editor'),
  submitButton: document.querySelector('.button'),
  searchInput: document.querySelector('.search-form__input'),
  noteTitle: document.querySelector('input[name="note_title"]'),
  noteBody: document.querySelector('textarea[name="note_body"]'),
  saveNoteBtn: document.querySelector('.modal__btn[form="note-editor-form"]'),
  addNoteBtn: document.querySelector('button[data-action="open-editor"]')
}

// function creates template of notes
export const createTemplateOfNotes = (notes) => {
  const notesTemplate = notes.map(note => noteTemplate(note)).join('');
  return notesTemplate;
}

const notesTemplate = createTemplateOfNotes(initNotes);

refs.noteList.insertAdjacentHTML('beforeend', notesTemplate)

