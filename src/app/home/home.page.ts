import { FilmResult } from './../interfaces/listfilms.interface';
import { FilmService } from './../services/film.service';
import { Component } from '@angular/core';
import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  films: FilmResult[] = [];

  constructor(private data: DataService, private filmService: FilmService) {}

  ngOnInit() {
    return this.filmService.getFilms().subscribe((films) => {
      this.films = films;
      console.log(this.films);
    });
  }
  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }
  searchFilm(event) {
    return this.filmService.getSearch(event.target.value).subscribe((films) => {
      this.films = films;
      console.log(this.films);
    });
  }
}
