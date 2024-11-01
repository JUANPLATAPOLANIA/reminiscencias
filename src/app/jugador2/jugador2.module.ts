import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Jugador2PageRoutingModule } from './jugador2-routing.module';

import { Jugador2Page } from './jugador2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Jugador2PageRoutingModule
  ],
  declarations: [Jugador2Page]
})
export class Jugador2PageModule {}
