import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { VuelosComponent } from '../vuelos/vuelos.component';
import { ClienteComponent } from '../cliente/cliente.component';

const routes: Routes=[
  {path: "prueba", component:VuelosComponent},
  {path: "", component:ClienteComponent}
]

@NgModule({
  imports:[ RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
