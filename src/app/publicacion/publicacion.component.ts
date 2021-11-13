import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import {HttpClient} from '@angular/common/http';
import { FirebaseDbService } from '../firebase-db.service';
import { PublicacionComponentModule } from './publicacion.module';

//import * as data from '../../assets/feed.json';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.scss'],
})

export class PublicacionComponent implements OnInit {
  
  
  publicacionId: any;



  volver(): void {
    this._location.back();
  }
  constructor(
    private RutaActiva: ActivatedRoute, 
    private _location : Location,
    private db: FirebaseDbService){}
  


  publicacion: any;
  descripcionPost: String;
  usuario: String;
  urlImagen: String;


  obtenerDetallePublicacion(param): void {

    //agregar FN para obtenerDetalle de publicacion

    this.db.getPublicacion(param).subscribe(res=> {
      console.log(res);

      let respuesta = Object.assign(res);

      this.descripcionPost = respuesta.descripcionPost;
      this.usuario = respuesta.usuario;
      this.urlImagen = respuesta.urlImagen;
     
    })
    
  }

  ngOnInit() {

   this.publicacionId = this.RutaActiva.snapshot.params.id;

   console.log(this.RutaActiva.snapshot.params.id);

   this.obtenerDetallePublicacion(this.publicacionId);


    
  
    
  }

}