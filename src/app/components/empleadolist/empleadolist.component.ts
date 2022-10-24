import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-empleadolist',
  templateUrl: './empleadolist.component.html',
  styleUrls: ['./empleadolist.component.css']
})
export class EmpleadoListComponent implements OnInit {
  listEmpleados: Empleado[] = [
    { legajo: 1, nombre: 'Juan', apellido: 'Perez', sexo: 'masculino', salario: 25000 },
    { legajo: 2, nombre: 'Marcos', apellido: 'Gozalez', sexo: 'masculino', salario: 65000 },
    { legajo: 3, nombre: 'Marta', apellido: 'Garcia', sexo: 'femenino', salario: 75000 },
    { legajo: 4, nombre: 'Ignacio', apellido: 'Cortes', sexo: 'masculino', salario: 55000 },
    { legajo: 5, nombre: 'Maria', apellido: 'Navarro', sexo: 'femenino', salario: 80000 },
  ]
  radiobutonselecionado =  "todos"


  constructor() { }

  ngOnInit(): void {
  }
  obternTotalEmpleados() {
    return this.listEmpleados.length
  }
  obterfemeninoEmpleados() {
    return this.listEmpleados.filter(list => (list.sexo === "femenino")).length
  }
  obterMasculinoEmpleados() {
    return this.listEmpleados.filter(list => (list.sexo === "masculino")).length
  }
}
