import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-crearsala',
  templateUrl: './crearsala.page.html',
  styleUrls: ['./crearsala.page.scss'],
})
export class CrearsalaPage {
  nombre: string = '';
  id: string = '';
  descripcion: string = '';

  constructor(private navCtrl: NavController, private storage: Storage) {
    this.storage.create();
  }

  async crearSala() {
    const nuevaSala = {
      nombre: this.nombre,
      id: this.id,
      descripcion: this.descripcion,
    };

    let salas = await this.storage.get('salas') || [];
    salas.push(nuevaSala);
    await this.storage.set('salas', salas);

    console.log('Sala creada:', nuevaSala);
    this.navCtrl.navigateForward('/versalas');
  }

  volver() {
    this.navCtrl.navigateBack('/versalas');
  }
}
