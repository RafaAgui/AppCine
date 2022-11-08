export interface Film {
  id?: string;
  title: string;
  director: Director;
  star: string;
  year: string;
  synopsis: string;
  alt_img?: string;
}

export enum Director {
  DelaLoma = 'José Antonio de la Loma',
  DelaIglesia = 'Eloy de la Iglesia',
  otro = 'Otro'
}