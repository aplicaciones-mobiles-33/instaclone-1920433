import { Component, OnInit } from '@angular/core';
import { PublicacionRoutingModule } from '../publicacion/publicacion-routing.module';

export interface Publicaciones{
  imagen: String;
  id: number;
}
@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss'],
})
export class PublicacionesComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit() {}
  
  
  publicacionesArreglo: Publicaciones[] = [
    {
      imagen: '../assets/images/Post 1.jpg',
      id: 1
    },
    {
      imagen: '../assets/images/Post 2.png',
      id: 3
    },
    {
      imagen: '../assets/images/Post 3.png',
      id: 2
    }
  ]
  
}
