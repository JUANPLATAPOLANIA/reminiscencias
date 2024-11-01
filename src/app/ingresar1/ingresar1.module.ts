import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ingresar1PageRoutingModule } from './ingresar1-routing.module';

import { Ingresar1Page } from './ingresar1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ingresar1PageRoutingModule
  ],
  declarations: [Ingresar1Page]
})
export class Ingresar1PageModule {}
