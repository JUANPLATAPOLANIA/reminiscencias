import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-master',
  templateUrl: './master.page.html',
  styleUrls: ['./master.page.scss'],
})
export class MasterPage {

  constructor(private navCtrl: NavController) {}

  crearServidor() {
    this.navCtrl.navigateForward('/crearsala');
  }

  verSalas() {
    this.navCtrl.navigateForward('/versala');
  }

  crearPersonje() {
    this.navCtrl.navigateForward('/crearpersonaje');
  }

  addcaracteristicas() {
    this.navCtrl.navigateForward('/addcaracteristicas');
  }
}
