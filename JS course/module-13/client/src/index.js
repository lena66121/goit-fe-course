import './sass/main.scss';
import {refs} from './js/view'
import {createNote, removeListItem, filterNotes, handleOpenModal} from './js/app';


refs.saveNoteBtn.addEventListener('click', createNote);
refs.noteList.addEventListener('click', removeListItem);
refs.searchInput.addEventListener('input', filterNotes);
refs.addNoteBtn.addEventListener('click', handleOpenModal);



