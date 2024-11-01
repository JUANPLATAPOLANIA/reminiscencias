import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VersalaPage } from './versala.page';

const routes: Routes = [
  {
    path: '',
    component: VersalaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VersalaPageRoutingModule {}
