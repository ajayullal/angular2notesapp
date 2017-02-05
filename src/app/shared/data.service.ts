import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  public notesList:any[] = [];

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
