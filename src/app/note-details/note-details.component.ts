import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {Subscription} from 'rxjs/Rx'

@Component({
  selector: 'ang2-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})

export class NoteDetailsComponent implements OnInit, OnDestroy {

  subscription:Subscription;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe((params:any)=>{
      console.log(params.id);
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
