import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventillos',
  templateUrl: './eventillos.component.html',
  styleUrls: ['./eventillos.component.css']
})
export class EventillosComponent implements OnInit {
  value = '';

  constructor() { }

  ngOnInit() {
  }

  bueno(event) {
    console.log('buenos días');
  }

  risa(event) {
    console.log('jijiji');
  }

  feo(event) {
    console.log('y tu que miras!');
  }

  malo(event) {
    console.log('te vas a cagar!');
  }

  validate() {
    if (this.value.length >= 5) {
      console.log('Valida');
    }
  }

  print() {
    console.log(this.value);
  }
}
