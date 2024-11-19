import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { ListarContratosComponent } from './components/listar-contratos/listar-contratos.component';
import { InsertarContratoComponent } from './components/insertar-contrato/insertar-contrato.component';
import { ActualizarContratoComponent } from './components/actualizar-contrato/actualizar-contrato.component';
import { EliminarContratoComponent } from './components/eliminar-contrato/eliminar-contrato.component';

const routes: Routes = [
  { path: 'principal', component: PrincipalComponent },
  { path: 'listar-contratos', component: ListarContratosComponent },
  { path: 'insertar-contrato', component: InsertarContratoComponent },
  { path: 'actualizar-contrato', component: ActualizarContratoComponent },
  { path: 'eliminar-contrato', component: EliminarContratoComponent },
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
