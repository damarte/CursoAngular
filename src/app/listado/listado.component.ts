import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  elements: string[];
  element: string;

  constructor() {
    this.elements = ['Prueba1', 'Prueba2'];
  }

  ngOnInit() {
  }

  addElement() {
    this.elements.push(this.element);
    this.element = '';
  }

}
