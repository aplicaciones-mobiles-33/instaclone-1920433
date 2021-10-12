import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  usuario: String =  "ruffles";
  seguidores: number = 243423;
  publicaciones: number = 12;
  siguiendo: number = 32;
  nombre: "Ruffles";
  descripcion: String = "hola, mundo!";

  constructor() {}

}
