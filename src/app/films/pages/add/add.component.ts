import { Component, OnInit } from '@angular/core';
import { Film, Director } from '../../interfaces/films.interface';
import { FilmsService } from '../../services/films.service';


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
    director: Director.DelaLoma,
    star: '',
    year: '',
    synopsis:''
  };

  constructor( private filmsservice: FilmsService) { }


  save() {
    if(this.film.title.trim().length === 0){
      return;
    }

    this.filmsservice.addFilms (this.film)
    .subscribe(resp => {console.log('Respuesta', resp);
  })
  }



  ngOnInit(): void {
  }

}
