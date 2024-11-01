import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ingreso',
    loadChildren: () => import('./ingreso/ingreso.module').then(m => m.IngresoPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'ingresar1',
    loadChildren: () => import('./ingresar1/ingresar1.module').then(m => m.Ingresar1PageModule)
  },
  {
    path: 'jugador',
    loadChildren: () => import('./jugador/jugador.module').then(m => m.JugadorPageModule)
  },
  {
    path: 'master',
    loadChildren: () => import('./master/master.module').then(m => m.MasterPageModule)
  },
  {
    path: 'seleccionpersonaje',
    loadChildren: () => import('./seleccionpersonaje/seleccionpersonaje.module').then( m => m.SeleccionpersonajePageModule)
  },
  {
    path: 'jugador2',
    loadChildren: () => import('./jugador2/jugador2.module').then( m => m.Jugador2PageModule)
  },
  {
    path: 'crearpersonaje',
    loadChildren: () => import('./crearpersonaje/crearpersonaje.module').then( m => m.CrearpersonajePageModule)
  },
  {
    path: 'crearsala',
    loadChildren: () => import('./crearsala/crearsala.module').then( m => m.CrearsalaPageModule)
  },
  {
    path: 'versala',
    loadChildren: () => import('./versala/versala.module').then( m => m.VersalaPageModule)
  },
  {
    path: 'versala',
    loadChildren: () => import('./versala/versala.module').then( m => m.VersalaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
