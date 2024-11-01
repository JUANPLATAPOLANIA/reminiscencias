import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importa NavController para la navegación


@Component({
  selector: 'app-seleccionpersonaje',
  templateUrl: './seleccionpersonaje.page.html',
  styleUrls: ['./seleccionpersonaje.page.scss'],
})
export class SeleccionpersonajePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goTojugador() {
    this.navCtrl.navigateForward('/jugador');
  }

  goTojugador2() {
    this.navCtrl.navigateForward('/jugador2');
  }

}
