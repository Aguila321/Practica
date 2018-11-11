import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../Service/heroes.service';
import { Router } from '@angular/router';
import { Usuario } from '../../interface/usuario.interface';



@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  correo: string;
  contrasena: string;
  usu : Usuario ={
    'dni': 0,
    'nombre':"",
    'apellido':"",
    'correo':"",
    'clave':""

  };  


  constructor(
    private router : Router,
    private heroeService:HeroesService) { }
 
  ngOnInit() {
  }
  registrar(){
    return this.heroeService.registerUser(this.correo,this.contrasena)
      .then((res)=>{
        console.log('Bien!!!!');
        console.log(res);
      }).catch((err)=>{
        console.log(err);
      });
  }
  login(){
    return this.heroeService.loginEmail(this.usu.correo,this.usu.clave)
          .then((res) =>{
            console.log('Se logeo');
            this.router.navigate(['/heroes']);
            console.log(res);
          }).catch((err)=>{
            console.log(err);
            this.router.navigate(['/user']);
          })

  }



}
