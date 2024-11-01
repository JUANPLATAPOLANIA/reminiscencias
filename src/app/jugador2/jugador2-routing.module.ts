import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Jugador2Page } from './jugador2.page';

const routes: Routes = [
  {
    path: '',
    component: Jugador2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Jugador2PageRoutingModule {}
