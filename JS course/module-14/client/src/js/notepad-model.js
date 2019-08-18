import {PRIORITY_TYPES} from './utils/constants';
import * as api from '../services/api';

export default class Notepad {
  
    constructor(notes = []) {
      this._notes = notes;
    }
    
  
    async getNotes() {
      try {
        const notes = await api.get();
        this._notes = notes;

        return this._notes;
      } catch (err) {
        throw err;
      }
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

  
    async saveNote(note) {
      try {
        const savedNote = await api.saveNote(note);
        this.notes.push(savedNote);
        
        return savedNote;
      } catch (err) {
        throw err;
      }
    }
  
    async deleteNote(id) {
      try {
        const noteId = await api.deleteNote(id);
        return this._notes = this._notes.filter(note => note.id !== noteId);
      } catch (err) {
        throw err;
      }
    }
  
    async updateNote(id, updateNote) {
      try {
        const updatedNote = await api.updateNote(id, updateNote);
        this.notes = this.notes.map(note => note.id === id ? updatedNote : note);
      } catch (err) {
        throw err;
      }
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