import { PipesModule } from './../pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { FilmlistComponent } from './filmlist.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FilmlistComponent],
  imports: [CommonModule, FormsModule, IonicModule, RouterModule, PipesModule],
  exports: [FilmlistComponent],
})
export class FilmlistModule {}
