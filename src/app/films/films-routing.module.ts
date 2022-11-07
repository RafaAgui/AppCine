import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './pages/add/add.component';
import { FilmComponent } from './pages/film/film.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children:
    [
    {
      path: 'listado',
      component: ListComponent
    },
    {
      path: 'agregar',
      component: AddComponent
    },
    {
      path: 'editar/:id',
      component: AddComponent
    },  
    {
      path: 'buscar',
      component: SearchComponent
    },
    {
      path: ':id',
      component: FilmComponent
    },
    {
      path: '**',
      redirectTo: 'Listado'
    }
    ]
}]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild (routes)
  ],
  exports: [
    RouterModule
  ]
})
export class FilmsRoutingModule { }
