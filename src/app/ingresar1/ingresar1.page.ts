import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ingresar1',
  templateUrl: './ingresar1.page.html',
  styleUrls: ['./ingresar1.page.scss'],
})
export class Ingresar1Page implements OnInit {
  apodo: string = ''; // Variable para almacenar el apodo del usuario

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.cargarApodo(); // Llamamos a la función para cargar el apodo al iniciar la página
  }

  cargarApodo() {
   
    this.route.queryParams.subscribe(params => {
      this.apodo = params['apodo'] || ''; 
    });

  }

  // Método para navegar a la página de Jugador
  goToSeleccionjugador() {
    this.navCtrl.navigateForward('/seleccionpersonaje');
  }

  // Método para navegar a la página de Master
  goToMaster() {
    this.navCtrl.navigateForward('/master');
  }
}
