import { Component, OnInit } from '@angular/core';
import { Film } from '../../interfaces/films.interface';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  search: string = '';
  films: Film[] = [];

  constructor(private filmsServices: FilmsService) { }

  ngOnInit(): void {
  }
  searhing (){
    this.filmsServices.getFilms()
    .subscribe(films => this.films = films)
  }
}
