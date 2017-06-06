import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {

  value: string;
  items: FirebaseListObservable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.db = db;
    this.items = this.db.list('/elements', {
      query: {
        // limitToLast: 10,
        orderByKey: true
      }
    });
  }

  ngOnInit() {
  }

  addEntry() {
    const itemObservable = this.db.list('/elements/');
    itemObservable.push({value: this.value});

    this.value = '';
  }

  delete(object) {
    const itemObservable = this.db.list('/elements/');
    itemObservable.remove(object.$key);
  }

}
