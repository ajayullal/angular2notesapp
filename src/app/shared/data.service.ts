import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  public notesList:any[] = [{name: 'Note 1', id:1, description: "This is note 1"},{name: 'Note 2', id:2, description: "This is note 2"},{name: 'Note 3', id:3, description: "This is note 3"}];
  constructor() { }

  addNewNote(newNote:{}){
    this.notesList.push(newNote);
  }

  getNotesList(){
    return this.notesList;
  }

  deleteNote(noteId:Number, index){
      this.notesList.splice(index,1);
  }

}
