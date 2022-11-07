import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Film } from '../../interfaces/films.interface';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  film!: Film;

  constructor(private activateRoute: ActivatedRoute,
              private filmsService: FilmsService
    ) { }

  ngOnInit(): void {
    this.activateRoute.params
    .pipe(switchMap ( ({id})=> this.filmsService.getFilmId(id) ))
    .subscribe(film => this.film = film);
  }

}
