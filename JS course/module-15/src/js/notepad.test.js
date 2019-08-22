import Notepad from './notepad';


const initialNotes = [
    {
      id: 'id-1',
      title: 'JavaScript essentials',
      body:
        'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
      priority: Notepad.Priority.HIGH,
    },
    {
      id: 'id-2',
      title: 'Refresh HTML and CSS',
      body:
        'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
      priority: Notepad.Priority.NORMAL,
    },
  ];

describe('test Notepad model', () => {

  it('should has InitialNotes', () => {
        const notepad = new Notepad(initialNotes);
    
        expect(notepad.notes).toEqual(initialNotes);
  });

  it('should get notes', () => {
    const notepad = new Notepad(initialNotes);
    const notesArray = notepad.get;

    expect(notepad.get).toBe(notesArray);
  });


  it('should find note by id', () => {
    const notepad = new Notepad(initialNotes);
    const foundNote = notepad.findNoteById('id-1');

    expect(notepad.findNoteById('id-1')).toBe(foundNote);
  });

  it('should save note', () => {
    const notepad = new Notepad(initialNotes);
    const savedNote = notepad.saveNote({
        id: 'id-3',
        title: 'New note title',
        body:
          'New note body',
        priority: Notepad.Priority.LOW,
      });

    expect(notepad.notes).toContain(savedNote);
  });

  it('should update note content by id', () => {
    const notepad = new Notepad(initialNotes);
    const updatedNote = notepad.updateNoteContent('id-1', {
        body: 'updated body'
    });

    expect(notepad.notes).toContain(updatedNote);
  });


  it('should update priority by id', () => {
    const notepad = new Notepad(initialNotes);
    const newPriority =  Notepad.Priority.HIGH;
    const updatedNote = notepad.updateNotePriority('id-1', newPriority);

    expect(updatedNote.priority).toBe(newPriority);
  });


  it('should filter notes by query', () => {
    const notepad = new Notepad(initialNotes);
    const filteredNotes = notepad.filterNotesByQuery('java');

    expect(filteredNotes).toContain(notepad.findNoteById('id-1'));
  });


  it('should filter notes by priority', () => {
    const notepad = new Notepad(initialNotes);
    const filteredNotes = notepad.filterNotesByPriority(1);

    expect(filteredNotes).toContain(notepad.findNoteById('id-2'));
  });

})