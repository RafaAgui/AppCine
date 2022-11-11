import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film, Director } from '../../interfaces/films.interface';
import { FilmsService } from '../../services/films.service';
import { switchMap } from 'rxjs';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  directors = [
    {
      id: 'iglesia',
      nameDirector: 'Eloy de la Iglesia',
    },
    {
      id: 'loma',
      nameDirector: 'José Antonio de la Loma',
    },
    {
      id: 'otro',
      nameDirector: 'otro',
    }
  ];

  film: Film = {
    id: '',
    title: '',
    director: Director.DelaIglesia,
    star: '',
    year: '',
    synopsis:''
  };

  constructor( private filmsservice: FilmsService,
               private activatedRoute: ActivatedRoute,
               private router: Router ) { }


  save() {
    if(this.film.title.trim().length === 0){
      return;
    }
    if (this.film.id){
      this.filmsservice.updateFilms (this.film)
      .subscribe (film => console.log('Actualizar película', film))
    } else {

      this.filmsservice.addFilms (this.film)
      .subscribe(film => {
        this.router.navigate(['/films/add', film.id]);
      })
    }
  }
  remove(){
    this.filmsservice.deleteFilms(this.film.id!)
    .subscribe(resp => {
      this.router.navigate(['/films'])
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.filmsservice.getFilmId(id))
    )
    .subscribe( film => this.film = film)
  }

}
