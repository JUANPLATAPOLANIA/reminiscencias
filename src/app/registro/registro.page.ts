import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  usuario: string = '';
  apodo: string = '';
  contrasena: string = '';

  constructor(
    private navCtrl: NavController,
    private toastController: ToastController,
    private http: HttpClient // Añadimos HttpClient
  ) {}
  goToLogin() {
    this.navCtrl.navigateForward('/');
  }
  async register() {
    if (this.usuario && this.apodo && this.contrasena) {
      const data = {
        usuario: this.usuario,
        apodo: this.apodo,
        contrasena: this.contrasena,
      };

      // Enviar datos al servidor
      this.http.post('http://localhost:3000/register', data)
        .subscribe(
          async response => {
            console.log('Usuario registrado:', response);
            
            // Mostrar mensaje de éxito
            const toast = await this.toastController.create({
              message: 'Registro exitoso',
              duration: 2000,
              color: 'success'
            });
            toast.present();

          },
          async error => {
            console.error('Error al registrar:', error);
            
            // Mostrar mensaje de error
            const toast = await this.toastController.create({
              message: 'Error al registrar. Intente nuevamente.',
              duration: 2000,
              color: 'danger'
            });
            toast.present();
          }
        );
    } else {
      // Mostrar un mensaje de error si falta algún campo
      const toast = await this.toastController.create({
        message: 'Por favor, complete todos los campos',
        duration: 2000,
        color: 'danger'
      });
      toast.present();
    }
  }
}
