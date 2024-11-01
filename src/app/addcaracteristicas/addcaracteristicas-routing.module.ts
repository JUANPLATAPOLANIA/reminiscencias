import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddcaracteristicasPage } from './addcaracteristicas.page';

const routes: Routes = [
  {
    path: '',
    component: AddcaracteristicasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddcaracteristicasPageRoutingModule {}
