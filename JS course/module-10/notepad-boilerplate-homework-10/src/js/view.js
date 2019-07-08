import {ICON_TYPES, NOTE_ACTIONS} from './utils/constants';
import {noteList, noteTitle, noteBody} from './html-el-const';

// Create general action button
 export const createActionButton = () => {
    const actionButton = document.createElement('button');
    actionButton.classList.add('action');
    return actionButton;
  }
  
  export const createNoteContent = note => {
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
  
  
 export  const createNoteFooter = note => {
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
  
  
 export const createListItem = note => {
  
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

  export  const renderNoteList = (listRef, notes) => {
    const listItems = notes.map(note => createListItem(note));
    listRef.innerHTML = '';
    listRef.append(...listItems);
  }