function NotesApplication(author){
	this.author=author;
	this.notes = [];
	this.create = function(note_content){
		this.notes.push(note_content);
	}

	this.listNotes = function(){
		var string;
		for(var i =0; i < this.notes.length; i++){
			string += 'Note ID: '+ i +'\n' + this.notes[i] + '\n' + 'By Author' + this.author+'\n';
			return(string);
		}
	}