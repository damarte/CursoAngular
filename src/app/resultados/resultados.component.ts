import { Component, OnInit } from '@angular/core';
import { ResultsService } from 'app/results.service';
import { Result } from 'app/result';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  results: Result[] = [];

  constructor(private resultService: ResultsService) {
    this.resultService.loadData().subscribe(data =>
      this.results = data
    );
    /*this.results = [
      new Result('Podemos', 'Dirección 1', 10),
      new Result('PP', 'Dirección 2', 10)
    ];*/
  }

  ngOnInit() {
  }

}
