import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-pipes',
  templateUrl: './test-pipes.component.html',
  styleUrls: ['./test-pipes.component.css']
})
export class TestPipesComponent implements OnInit {
  private textoPrincipal  : String; 
  private salario         : number;
  private fecha           : Date;
  private test            : String;

  constructor() {
    this.textoPrincipal="Father, give us sight!";
    this.salario = 15284;
    this.fecha = new Date();
    this.test = "Edward ES TONTO";
   }

  ngOnInit() {
  }

}
