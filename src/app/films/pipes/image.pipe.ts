import { Pipe, PipeTransform } from '@angular/core';
import { Film } from '../interfaces/films.interface';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(film: Film ): string {
    return `assets/images/${film.id}.jpg`
  }

}
