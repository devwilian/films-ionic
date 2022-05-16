import { Film } from './../interfaces/film.interface';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from './../services/film.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filmdetail',
  templateUrl: './filmdetail.page.html',
  styleUrls: ['./filmdetail.page.scss'],
})
export class FilmdetailPage implements OnInit {
  public film: Film;
  constructor(
    private filmService: FilmService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params) => {
      console.log(params['id']);
      this.filmService.getFilm(params['id']).subscribe((film) => {
        this.film = film;
      });
    });
  }
  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }
}
