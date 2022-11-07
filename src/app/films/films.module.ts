import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { FilmComponent } from './pages/film/film.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { FilmsRoutingModule } from './films-routing.module';
import { CardComponent } from './components/card/card.component';
import { ImagePipe } from './pipes/image.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    FilmComponent,
    HomeComponent,
    ListComponent,
    CardComponent,
    ImagePipe
  ],
  imports: [
    CommonModule,
    FilmsRoutingModule,
    FormsModule
  ]
})
export class FilmsModule { }
