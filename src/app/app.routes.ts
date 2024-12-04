import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CarritoComponent } from './carrito/carrito.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { CompraComponent } from './compra/compra.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },

  { path: 'carrito', component: CarritoComponent },

  { path: 'nosotros', component: NosotrosComponent }, 

  { path: 'compra', component: CompraComponent },

  { path: 'ubicacion', component: UbicacionComponent } 

];
