describe('Each method should return the right data: ', function() {
  

  beforeEach(function() {
    // var noteApp;
      noteApp = new NotesApplication('Ajayi'); 
  });

  it('listNote should return a string', function() {
    // noteApp.getNote.();
    // noteApp.notes = ["eyteafdhae faeygf ieda", "sjflgusfdk sfd"];
    // spyOn(noteApp, 'getNote');
    // expect(typeof(noteApp.getNote.calls.argsFor(0)[0])).toBe('string');
    expect(typeof(noteApp.listNotes())).toBe(typeof("dfsd"));
  });

  it('getNote should return a string', function() {
    noteApp.notes[0] = "content1"
    expect(typeof(noteApp.getNote(0))).toBe(typeof("string"));
  });

  // it('search method should return a string', function() {
  //   noteApp.notes[0] = "content1";
  //   expect(typeof(noteApp.search())).toBe(typeof("string"));
  // });


  it("edit must return true as the value", function() {
    expect(noteApp.edit(0,"Welcome")).toBe(true);
  });
});
