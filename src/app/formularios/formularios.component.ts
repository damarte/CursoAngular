import { Component, OnInit } from '@angular/core';
import { Signup } from 'app/signup';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  model: Signup;
  genders = ['Man', 'Woman', 'Other'];
  orientations = ['Heterosexual', 'Homosexual', 'Bisexual', 'Other'];
  relationships = ['Open', 'Marry', 'Casual'];

  constructor() {
    this.model = new Signup('', '', '', '', '', '', '');
  }

  ngOnInit() {
  }

}
