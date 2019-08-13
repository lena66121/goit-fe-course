import {PRIORITY_TYPES} from './utils/constants';
import * as api from '../services/api';

export default class Notepad {
  
    constructor(notes = []) {
      this._notes = notes;
    }
    
  
    getNotes() {
     return api.get()
      .then(notes => {
        this._notes = notes;
        return this._notes;
      })
    };
  
    get priority() {
      return PRIORITY_TYPES.LOW;
    }
  
    createNewNote(title, body) {

      const newNote = {
        title: title,
        body: body,
        priority: this.priority,
    }

      return newNote;
    }

  
    findNoteById(id) {
      return this.notes.find(note => note.id === id);
    }

  
    saveNote(note) {
     return  api.saveNote(note).then(note => {
          this.notes.push(note);
          return note;
      })
    }
  
    deleteNote(id) {
      return api.deleteNote(id)
      .then(id => {
        return this._notes =  this._notes.filter(note => note.id !== id);
      })
    }
  
    updateNote(id, updateNote) {
      return api.updateNote(id, updateNote)
      .then(updatedNote => {
        this.notes =  this.notes.map(note => note.id === id ? updatedNote : note)
      })
    }
  
    updateNotePriority(id, priority) {
      const note = this.findNoteById(id);
      note.priority = priority;
      return note;
    }
  
    filterNotesByQuery(query) {
      query = query.toLowerCase();
      const notesFilteredByQuery = [];
      this._notes.forEach(note => {
        if (note.title.toLowerCase().includes(query) || note.body.toLowerCase().includes(query)) 
        notesFilteredByQuery.push(note)
      })
      return notesFilteredByQuery;
    }

  
    filterNotesByPriority(priority) {
      const notesFilteredByPriority = [];
      this._notes.forEach(note => {
        if (note.priority === priority) 
        notesfilteredByPriority.push(note)
      })
       return notesFilteredByPriority;
    }

    get notes() {
      return this._notes;
    }
  }