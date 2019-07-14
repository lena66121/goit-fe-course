import {PRIORITY_TYPES} from './utils/constants'
const shortid = require('shortid');

export default class Notepad {
  
    constructor(notes = []) {
      this._notes = notes;
    }
    
    get notes() {
      return this._notes;
    }
  
    getNotes() {
      return notes;
    };
  
    get priority() {
      return PRIORITY_TYPES.LOW;
    }
  
    createNewNote(titleContent, bodyContent) {
      const newObjNote = {
        id: shortid.generate(),
        title: titleContent,
        body: bodyContent,
        priority: this.priority,
    }
      return newObjNote;
    }
  
    findNoteById(id) {
      return this.notes.find(note => note.id === id);
    };
  
    saveNote(note) {
      this.notes.push(note)
      return note;
    };
  
    deleteNote(id) {
       const note = this.findNoteById(id);
       this.notes.splice(this.notes.indexOf(note), 1);
    }
  
    updateNoteContent(id, updatedContent) {
      const note = this.findNoteById(id);
      return Object.assign(note, updatedContent);
    };
  
    updateNotePriority(id, priority) {
      const note = this.findNoteById(id);
      note.priority = priority;
      return note;
    }
  
    filterNotesByQuery(query) {
      
      query = query.toLowerCase();
      const notesFilteredByQuery = [];
      this.notes.forEach(note => {
        if (note.title.toLowerCase().includes(query) || note.body.toLowerCase().includes(query)) 
        notesFilteredByQuery.push(note)
      })
      return notesFilteredByQuery;
    }
  
    filterNotesByPriority(priority) {
      const notesfilteredByPriority = [];
      this.notes.forEach(note => {
        if (note.priority === priority) 
        notesfilteredByPriority.push(note)
      })
       return notesfilteredByPriority;
    }
  }