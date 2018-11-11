import { Routes, RouterModule } from '@angular/router';


import { HeroesComponent } from './Components/heroes/heroes.component';
import { HeroeComponent } from './Components/heroes/heroe.component';
 import { UsuarioComponent  } from './Components/usuario/usuario.component';
// import { Name4Component } from './';
// import { PageNotFoundComponent } from './';

const APP_ROUTES: Routes = [
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'user', component: UsuarioComponent},
    { path: '**', pathMatch:'full', redirectTo:'heroes'},

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
