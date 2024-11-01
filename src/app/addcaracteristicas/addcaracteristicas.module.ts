import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddcaracteristicasPageRoutingModule } from './addcaracteristicas-routing.module';

import { AddcaracteristicasPage } from './addcaracteristicas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddcaracteristicasPageRoutingModule
  ],
  declarations: [AddcaracteristicasPage]
})
export class AddcaracteristicasPageModule {}
