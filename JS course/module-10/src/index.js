import './sass/main.scss';
import {renderNoteList, refs} from './js/view'
import {createNote, removeListItem, filterNotes, notePad} from './js/app';


renderNoteList(refs.noteList, notePad.notes);


refs.formNoteEditor.addEventListener('submit', createNote);
refs.noteList.addEventListener('click', removeListItem);
refs.searchInput.addEventListener('input', filterNotes);