import { FilmResult } from './../interfaces/listfilms.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filmlist',
  templateUrl: './filmlist.component.html',
  styleUrls: ['./filmlist.component.scss'],
})
export class FilmlistComponent implements OnInit {
  @Input() film: FilmResult;
  constructor() {}

  ngOnInit() {}
  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}
