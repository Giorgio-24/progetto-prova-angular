import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//^COSI FACENDO VADO A MOSTRARE IL COMPONENTE HOME ALL'AVVIO DELLA PAGINA.
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
