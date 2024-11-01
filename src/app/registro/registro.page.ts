import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  usuario: string = '';
  apodo: string = '';
  contrasena: string = '';
  contrasenaConfirmar: string = '';

  constructor(private alertController: AlertController) {}

  async registrar() {
    // Verificar si las contraseñas coinciden
    if (this.contrasena !== this.contrasenaConfirmar) {
      await this.mostrarAlerta('Error', 'Las contraseñas no coinciden');
      return;
    }

    // Recuperar usuarios guardados o iniciar con un array vacío
    const usuariosGuardados: any[] = JSON.parse(localStorage.getItem('usuarios') || '[]');

    // Verificar si el usuario ya está registrado
    const usuarioExistente = usuariosGuardados.find((user: any) => user.usuario === this.usuario);

    if (usuarioExistente) {
      await this.mostrarAlerta('Error', 'El usuario ya está registrado');
      return; // No continuar con el registro si el usuario ya existe
    }

    // Si el usuario no existe, crear un nuevo objeto de usuario
    const usuarioData = {
      usuario: this.usuario,
      apodo: this.apodo,
      contrasena: this.contrasena, // Recuerda: En un entorno real, encripta la contraseña.
    };

    // Agregar el nuevo usuario al array
    usuariosGuardados.push(usuarioData);

    // Guardar el array actualizado en localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));

    // Imprimir en consola los usuarios registrados
    console.log('Usuarios registrados:', usuariosGuardados);

    await this.mostrarAlerta('Éxito', 'Usuario registrado correctamente');
    this.limpiarCampos();
  }

  async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK'],
    });

    await alert.present();
  }

  limpiarCampos() {
    this.usuario = '';
    this.apodo = '';
    this.contrasena = '';
    this.contrasenaConfirmar = '';
  }
}
