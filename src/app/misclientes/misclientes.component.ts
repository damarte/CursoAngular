import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Client } from 'app/client';

@Component({
  selector: 'app-misclientes',
  templateUrl: './misclientes.component.html',
  styleUrls: ['./misclientes.component.css']
})
export class MisclientesComponent implements OnInit {

  clients: Client[];
  name: string;
  address: string;

  constructor() {
    this.clients = [
      new Client('Cliente 1', 'Dirección 1'),
      new Client('Cliente 2', 'Dirección 2')
    ];
  }

  ngOnInit() {
  }

  addClient() {
    this.clients.push(new Client(this.name, this.address));
    this.name = '';
    this.address = '';
  }
}
