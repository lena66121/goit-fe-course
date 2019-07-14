'use strict';

const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

const ICON_TYPES = {
  EDIT: 'edit',
  DELETE: 'delete',
  ARROW_DOWN: 'expand_more',
  ARROW_UP: 'expand_less',
};

const NOTE_ACTIONS = {
  DELETE: 'delete-note',
  EDIT: 'edit-note',
  INCREASE_PRIORITY: 'increase-priority',
  DECREASE_PRIORITY: 'decrease-priority',
};


class Notepad {
  constructor(notes = []) {
    this._notes = notes;
  }
  
  get notes() {
    return this._notes;
  }

  getNotes() {
    return notes;
  };

  findNoteById(id) {
    for (const note of this.notes) {
      if (note.id === id) return note;
    }
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
     for (const note of this.notes) {
       if (note.title.toLowerCase().includes(query) || note.body.toLowerCase().includes(query)) 
       notesFilteredByQuery.push(note)
      }
      return notesFilteredByQuery;
  }

  filterNotesByPriority(priority) {
     const notesfilteredByPriority = [];
     for (const note of this.notes) {
       if (note.priority === priority) 
       notesfilteredByPriority.push(note)
     }
     return notesfilteredByPriority;
  }
}


const initialNotes = [
  {
    id: 'id-1',
    title: 'JavaScript essentials',
    body:
      'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: PRIORITY_TYPES.HIGH,
  },
  {
    id: 'id-2',
    title: 'Refresh HTML and CSS',
    body:
      'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-3',
    title: 'Get comfy with Frontend frameworks',
    body:
      'First should get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-4',
    title: 'Winter clothes',
    body:
      "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: PRIORITY_TYPES.LOW,
  },
];



const notePad = new Notepad(initialNotes);

const noteList = document.querySelector('.note-list');


// Create general action button
const createActionButton = () => {
  const actionButton = document.createElement('button');
  actionButton.classList.add('action');
  return actionButton;
}


const createNoteContent = note => {
  // Variables
  const noteContentDiv = document.createElement('div');
  const noteTitle = document.createElement('h1');
  const noteBody = document.createElement('p');

  // Classes
  noteContentDiv.classList.add('note__content');
  noteTitle.classList.add('note__title');
  noteBody.classList.add('note__body');

  // TextContent
  noteTitle.textContent = note.title;
  noteBody.textContent = note.body;

  // Add to screen
  noteContentDiv.append(noteTitle);
  noteContentDiv.append(noteBody);

  return noteContentDiv;
}



const createNoteFooter = note => {
  // Variables
  const noteFooter = document.createElement('footer');
  const noteFirstSection = document.createElement('section');
  const notePrioritySpan = document.createElement('span');
  const noteSecondSection = document.createElement('section');
  const decreasePriorButton = createActionButton();
  const increasePriorButton = createActionButton();
  const editNoteButton = createActionButton();
  const deleteNoteButton = createActionButton();
  const moreIcon = document.createElement('i');
  const lessIcon = document.createElement('i');
  const editIcon = document.createElement('i');
  const deleteIcon = document.createElement('i');
  
  //Classes
  noteFooter.classList.add('note__footer');
  noteFirstSection.classList.add('note__section');
  notePrioritySpan.classList.add('note__priority');
  noteSecondSection.classList.add('note__section');
  moreIcon.classList.add('material-icons', 'action__icon');
  lessIcon.classList.add('material-icons', 'action__icon');
  editIcon.classList.add('material-icons', 'action__icon');
  deleteIcon.classList.add('material-icons', 'action__icon');

  // Attributes
  increasePriorButton.dataset.action = NOTE_ACTIONS.DECREASE_PRIORITY;
  decreasePriorButton.dataset.action = NOTE_ACTIONS.INCREASE_PRIORITY;
  editNoteButton.dataset.action = NOTE_ACTIONS.EDIT;
  deleteNoteButton.dataset.action = NOTE_ACTIONS.DELETE;

  // TextContent
  notePrioritySpan.textContent = `Priority: ${note.priority}`;
  moreIcon.textContent = ICON_TYPES.ARROW_DOWN;
  lessIcon.textContent = ICON_TYPES.ARROW_UP;
  editIcon.textContent = ICON_TYPES.EDIT;
  deleteIcon.textContent = ICON_TYPES.DELETE;
  
  // Add to screen
  noteFooter.append(noteFirstSection);
  noteFirstSection.append(decreasePriorButton);
  decreasePriorButton.append(moreIcon);
  noteFirstSection.append(increasePriorButton);
  increasePriorButton.append(lessIcon);
  noteSecondSection.append(editNoteButton);
  editNoteButton.append(editIcon);
  noteSecondSection.append(deleteNoteButton);
  deleteNoteButton.append(deleteIcon);
  noteFirstSection.append(notePrioritySpan);
  noteFooter.append(noteSecondSection);

  return noteFooter;
  
}


const createListItem = note => {

  const noteListItem = document.createElement('li');
  noteListItem.classList.add('note-list__item');
  noteListItem.dataset.id = note.id;
  noteList.append(noteListItem);

  const noteDiv = document.createElement('div');
  noteDiv.classList.add("note");
  noteListItem.append(noteDiv);

  const noteContent = createNoteContent(note);
  const noteFooter = createNoteFooter(note);
  noteDiv.append(noteContent);
  noteDiv.append(noteFooter);

  return noteListItem;
}


const renderNoteList = (listRef, notes) => {
  const listItems = notes.map(note => createListItem(note));
    listRef.append(...listItems);
}

renderNoteList(noteList, notePad.notes)










