import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearpersonajePage } from './crearpersonaje.page';

const routes: Routes = [
  {
    path: '',
    component: CrearpersonajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearpersonajePageRoutingModule {}
