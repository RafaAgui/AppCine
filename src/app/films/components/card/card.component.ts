import { Component, Input } from '@angular/core';
import { Film } from '../../interfaces/films.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

 @Input() film!: Film;

}
