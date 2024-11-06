import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {
  usuario: string = '';
  contrasena: string = '';

  constructor(
    private http: HttpClient,
    private toastController: ToastController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  async login() {
    if (this.usuario && this.contrasena) {
      const data = {
        usuario: this.usuario,
        contrasena: this.contrasena,
      };

      this.http.post('http://localhost:3000/ingreso', data)
        .subscribe(
          async (response: any) => {
            if (response.success) {
              // Autenticación exitosa
              const toast = await this.toastController.create({
                message: 'Inicio de sesión exitoso',
                duration: 2000,
                color: 'success'
              });
              toast.present();
              this.navCtrl.navigateRoot('/ingresar1'); // Navegar a la página ingresar1
            } else {
              // Error de autenticación
              const toast = await this.toastController.create({
                message: 'Usuario o contraseña incorrectos',
                duration: 2000,
                color: 'danger'
              });
              toast.present();
            }
          },
          async error => {
            console.error('Error al iniciar sesión:', error);
            const toast = await this.toastController.create({
              message: 'Error al iniciar sesión. Intente nuevamente.',
              duration: 2000,
              color: 'danger'
            });
            toast.present();
          }
        );
    } else {
      const toast = await this.toastController.create({
        message: 'Por favor, complete todos los campos',
        duration: 2000,
        color: 'danger'
      });
      toast.present();
    }
  }
}
