import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from '../../interface/heroe.interface';
import { HeroesService } from '../../Service/heroes.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

   heroe:Heroe = {
    'nombre':'',
    'bio':'',
    'casa':"Marvel"
    }
  nuevo : boolean=false;
  id:string;
  constructor(private heroeService:HeroesService, private route: Router, private activatedRoute: ActivatedRoute) {
      this.activatedRoute.params.subscribe( parametros=>{
          console.log(parametros);
          this.id = parametros['id']
          if( this.id !== "nuevo" ){
 
            this.heroeService.getHeroe( this.id )
            .subscribe( (data:Heroe) => this.heroe = data )
             
           }
      });
     
   }

  ngOnInit() {
  
  }
  guardar(){

    if(this.id=="nuevo"){
      this.heroeService.nuevoHeroe(this.heroe)
      .subscribe( (data:any)=>{
        console.log(data);
        // this.route.navigate(['/heroe',data.name])
         this.route.navigate(['/heroes']);
      },
      error=>{
        console.log(error);
      });
    }else{
      this.heroeService.actualizarHeroe(this.heroe,this.id)
      .subscribe( (data:any)=>{
        console.log(data);
        this.route.navigate(['/heroes']);
      },
      error=>{
        console.log(error);
      });

    }

  }
  agregarNuevo(forma:NgForm){
    this.route.navigate(['/heroe','nuevo']);
    forma.reset({
      casa :"Marvel"
    })
  }
 


}


