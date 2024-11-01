import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage {
  usuario: string = '';  // Variable para almacenar el nombre de usuario ingresado
  contrasena: string = ''; // Variable para almacenar la contraseña ingresada

  constructor(private alertController: AlertController, private navCtrl: NavController) {}

  async goToIngresar() {
    // Verificar que los campos no estén vacíos
    if (this.usuario.trim() === '' || this.contrasena.trim() === '') {
      await this.mostrarAlerta('Error', 'Por favor, completa todos los campos.');
      return; // Salir de la función si hay campos vacíos
    }

    // Recuperar usuarios guardados del localStorage
    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios') || '[]');

    // Buscar el usuario ingresado
    const usuarioEncontrado = usuariosGuardados.find((user: any) => user.usuario === this.usuario && user.contrasena === this.contrasena);

    if (usuarioEncontrado) {
      // Si se encuentra el usuario y la contraseña es correcta
      await this.mostrarAlerta('Éxito', `Bienvenido, ${usuarioEncontrado.apodo}!`);
      
      // Navegar a la página Ingresar1 y pasar el apodo
      this.navCtrl.navigateForward('/ingresar1', {
        queryParams: { apodo: usuarioEncontrado.apodo }
      });
    } else {
      // Si no se encuentra el usuario o la contraseña es incorrecta
      await this.mostrarAlerta('Error', 'Usuario o contraseña incorrectos.');
    }
  }

  async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK'],
    });

    await alert.present();
  }
}

