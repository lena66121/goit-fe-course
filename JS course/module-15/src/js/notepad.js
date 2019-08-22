export default class Notepad {
  
    constructor(notes = []) {
      this._notes = notes;
    }

    static Priority = {
      LOW: 0,
      NORMAL: 1,
      HIGH: 2
    };

    
    get notes() {
      return this._notes;
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
      const notesFilteredByPriority = [];
      this.notes.forEach(note => {
        if (note.priority === priority) 
        notesFilteredByPriority.push(note)
      })
       return notesFilteredByPriority;
    }
  }

 