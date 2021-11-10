import { Component, OnInit } from '@angular/core';
import { PublicacionRoutingModule } from '../publicacion/publicacion-routing.module';



import { FirebaseDbService } from '../firebase-db.service';

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
  
  constructor(private db: FirebaseDbService) { }

   publicaciones = [];

   obtenerPublicaciones(): void {
     this.db.getPublicaciones().subscribe(
       res => {
         console.log(res);
         this.publicaciones = res;
       }
     )
   }

  ngOnInit() {
    this.obtenerPublicaciones();
  }
}
