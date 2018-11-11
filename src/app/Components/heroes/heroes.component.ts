import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../Service/heroes.service';
import { Heroe } from '../../interface/heroe.interface';
import { $ } from 'protractor';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];
  heroe: Heroe = {
    'nombre': '',
    'bio': '',
    'casa': "Marvel"
  }
  id: string;
  loading : boolean= true;
  constructor(private heroeService: HeroesService) {
    this.heroeService.getHeroes()
      .subscribe(data => {
       // this.heroes = data;
        setTimeout(()=>{
          this.loading=false;
          this.heroes=data;
         
        },3000);
       
   })




  }

  logOut(){
    this.heroeService.logOut()
  }


  ngOnInit() {
  }
  eliminarHeroe(key$: string) {
    this.heroeService.borrarHeroe(key$)
      .subscribe(data => {
        if (data) {
          console.error(data);
        } else {
          delete this.heroes[key$];
        }
      })
  }
  obtener(key$: string) {
    console.log(key$);
    this.heroeService.getHeroe(key$)
      .subscribe((aea: Heroe) => {
        console.log(aea);
        this.heroe = aea
      })
  }
  actualizar() {
    this.heroeService.actualizarHeroe(this.heroe, this.id)
      .subscribe((data: any) => {
        console.log(data);
        this.heroe = data;
        this.listar();

      });
  }
  listar() {
    this.heroeService.getHeroes()
      .subscribe(data => {
        this.heroes = data;
        console.log(data);
      });
  
  }

}
