import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { HttpClientModule } from '@angular/common/http';

//Firebase App
import { environment } from 'src/environments/environment';
import { AngularFireModule} from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';


//Camara/Archivos/etc
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  declarations: [ AppComponent],
  entryComponents: [],
  imports: [
    HttpClientModule,
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot()
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
