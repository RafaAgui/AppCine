import { Component, OnInit } from '@angular/core';
import { Film } from '../../interfaces/films.interface';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  films: Film [] = [];
  constructor(private filmsService: FilmsService) { }

  ngOnInit(): void {
    this.filmsService.getFilms().subscribe( films => {
      this.films = films;
    });
  }

}
