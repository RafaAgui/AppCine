import { Pipe, PipeTransform } from '@angular/core';
import { Film } from '../interfaces/films.interface';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(film: Film ): string {
    if(!film.id && !film.alt_img)
    {
      return 'assets/placeholder.jpg';
    } else if (film.alt_img) {
      return film.alt_img;
    }
    return `assets/images/${film.id}.jpg`
  }

}
