import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './Components/heroes/heroes.component';
import { HeroeComponent } from './Components/heroes/heroe.component';
// rutas
import { APP_ROUTING } from './app.routes';
// http
import { HttpClientModule } from '@angular/common/http';

import { HeroesService } from './Service/heroes.service';
import { KeysPipe } from './pipes/keys.pipe';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { ManteUsuarioComponent } from './Components/usuario/mante-usuario/mante-usuario.component';

import { environment } from '../environments/environment';

// import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeComponent,
    KeysPipe,
    UsuarioComponent,
    ManteUsuarioComponent
    
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)

  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
