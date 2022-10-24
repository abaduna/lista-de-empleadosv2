import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comptempleados',
  templateUrl: './comptempleados.component.html',
  styleUrls: ['./comptempleados.component.css']
})
export class ComptempleadosComponent implements OnInit {
  radiobutonselecionado =  "todos"
  @Input() todos:number
  constructor() {
    this.todos = 0
   }

  ngOnInit(): void {
  }

}
