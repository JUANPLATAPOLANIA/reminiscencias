import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearpersonajePageRoutingModule } from './crearpersonaje-routing.module';

import { CrearpersonajePage } from './crearpersonaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearpersonajePageRoutingModule
  ],
  declarations: [CrearpersonajePage]
})
export class CrearpersonajePageModule {}
