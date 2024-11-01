import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-crearpersonaje',
  templateUrl: './crearpersonaje.page.html',
  styleUrls: ['./crearpersonaje.page.scss'],
})
export class CrearpersonajePage {
  constructor(private navCtrl: NavController) {}

  crearPersonaje() {
    this.navCtrl.navigateForward('/seleccionpersonaje'); // Asegúrate de que esta ruta exista en tu aplicación
  }
}
