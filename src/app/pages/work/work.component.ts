import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  workBody = [];

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    const workContent = this.db.collection('work').valueChanges();
    workContent.subscribe(value => this.parseWorkResponse(value));
  }

  parseWorkResponse(value) {
    this.workBody = Array.from(value); 
    console.log(value)
  }

}
