import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VersalaPageRoutingModule } from './versala-routing.module';

import { VersalaPage } from './versala.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VersalaPageRoutingModule
  ],
  declarations: [VersalaPage]
})
export class VersalaPageModule {}
