import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {Subscription} from 'rxjs/Rx'
import {DataService} from '../shared/data.service'

@Component({
  selector: 'ang2-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})

export class NoteDetailsComponent implements OnInit, OnDestroy {

  subscription:Subscription;
  note;

  constructor(private activatedRoute:ActivatedRoute, private dataService:DataService) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe((params:any)=>{
      this.dataService.getNotesList().forEach((note, index)=>{
        if(note.id==params.id){
           this.note = note;
        }
      });
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
