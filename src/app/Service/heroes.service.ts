import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Heroe } from '../interface/heroe.interface';
import { map } from 'rxjs/operators'
import { Usuario } from '../interface/usuario.interface';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {



  fireUrl: string = "https://heroesapp-ba58c.firebaseio.com/heroes.json";
  heroeUrl: string = "https://heroesapp-ba58c.firebaseio.com/heroes/";

  usUrl: string ="https://integrador-a7bf2.firebaseio.com/usuarios.json";
  usuariosUrl :string ="https://integrador-a7bf2.firebaseio.com/usuarios/";
  constructor(private http: HttpClient,private afuth: AngularFireAuth) {

  
  }

  //crud de usuarios 
  registrarUsuario(usuario : Usuario){
    let body = JSON.stringify(usuario);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.usUrl,body,{headers})
      .pipe(map(rest =>{
        console.log(rest);
        return rest;
    }));
    
  }
  
  actualizarUsuario(usuario : Usuario, keys$: string){
    let body = JSON.stringify(usuario);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let url = `${this.usuariosUrl}${keys$}.json`
    return this.http.post(url,body,{headers})
      .pipe(map(rest =>{
        console.log(rest);
        return rest;
    }));

  }
  
  borrarUsuario(){

  }
  obtenerUsuario(key$: string){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    /*https://integrador-a7bf2.firebaseio.com/usuarios/1*/ 
    let url = `${this.usuariosUrl}${key$}.json`;
    return this.http.get(url)
      .pipe(map( (rest:any) =>{
          console.log(rest);
          return rest;
      })
      );

  }
  listaUsuario(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let url = `${this.usUrl}`;
    return this.http.get(url)
      .pipe(map( (rest:any) =>{
          console.log(rest);
          return rest;
      })
      );

  }

 /** usando autenticacion de fire*/
  registerUser(email:string,pass:string){
    return new Promise((resolve,reject) =>{
      this.afuth.auth.createUserWithEmailAndPassword(email,pass)
        .then(userInfo =>  resolve(userInfo),
        err => reject(err));
  
    });
     
  }
  loginEmail(email: string, pass:string){
    return new Promise((resolve,reject) =>{
      this.afuth.auth.signInWithEmailAndPassword(email,pass)
        .then(userInfo =>  resolve(userInfo), 
        err => reject(err));
        
    });

  }

  logOut(){
    return this.afuth.auth.signOut();
  }
  /*Comprobar si el usuario esta logeado*/ 
  getAuth(){
    return this.afuth.authState
    .pipe(map(auth=>auth));

  }



// crud de firebase  de hereos

  nuevoHeroe(heroe: Heroe) {
    let body = JSON.stringify(heroe);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.fireUrl, body, { headers })
      .pipe(map(rest => {
        console.log(rest);
        return rest;
      })
  );
  }
  actualizarHeroe(heroe: Heroe, key$: string) {
    let body = JSON.stringify(heroe);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let url = `${this.heroeUrl}/${key$}.json`;
    return this.http.put(url, body, { headers })
      .pipe(map(rest => {
        console.log(rest);
        return rest;
      })
      );
  }
  getHeroe(key$: string) {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let url = `${this.heroeUrl}${key$}.json`;
    return this.http.get(url)
      .pipe(map( (rest:any) =>{
          console.log(rest);
          return rest;
      })
      );
   
  }
  getHeroes() {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let url = `${this.fireUrl}`;
    return this.http.get(url)
      .pipe(map( (rest:any) =>{
          console.log(rest);
          return rest;
      })
      );
   
  }
  borrarHeroe(key$){
    let url = `${this.heroeUrl}${key$}.json`;
    return this.http.delete(url)
      .pipe(map(
        (rest:any) => {
           return rest;
        })
        );
  }








}


