import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Importa el módulo HttpClientModule
import { HttpClientModule } from '@angular/common/http';
// Importa el servicio UsuarioService
import { UsuarioService } from './services/usuario.service';
// Importa IonicStorageModule para el almacenamiento
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule, // Asegúrate de incluir esto
    IonicStorageModule.forRoot() // Configuración de Ionic Storage
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    UsuarioService // Asegúrate de incluir el servicio aquí si es necesario
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
