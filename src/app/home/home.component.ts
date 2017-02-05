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

    for(let note of [{name: 'Note 1', id:1},{name: 'Note 2', id:2},{name: 'Note 3', id:3}]){
        this.dataService.addNewNote(note);
    }
  }

  addNewNote(noteTile, noteTitleElemnt){
    if(noteTile){
      noteTitleElemnt.value = "";
      this.dataService.addNewNote({name: noteTile, id: this.notesList[this.notesList.length - 1].id+1});
    }
  }

  deleteNote(event, note, index){
    event.stopPropagation();
    this.dataService.deleteNote(note.id, index);
  }
}
