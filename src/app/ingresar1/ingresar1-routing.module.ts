import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ingresar1Page } from './ingresar1.page';

const routes: Routes = [
  {
    path: '',
    component: Ingresar1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ingresar1PageRoutingModule {}
