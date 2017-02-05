import { Component, OnInit } from '@angular/core';
import {DataService} from '../shared/data.service'

@Component({
  selector: 'ang2-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  notesList:any[];

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.notesList = this.dataService.getNotesList();
  }

  addNewNote(noteTile, noteTitleElemnt, noteDesc, noteDescElemnt){
    if(noteTile){
      noteTitleElemnt.value = "";
      noteDescElemnt.value = "";
      this.dataService.addNewNote({name: noteTile, id: this.notesList[this.notesList.length - 1].id+1, description: noteDesc});
    }
  }

  deleteNote(event, note, index){
    event.stopPropagation();
    this.dataService.deleteNote(note.id, index);
  }
}
