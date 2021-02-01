import { ClientEditComponent } from './pages/client/client-edit/client-edit.component';
import { ClientComponent } from './pages/client/client.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientCreateComponent } from './pages/client/client-create/client-create.component';

const routes: Routes = [
  { path: '', component: ClientComponent },
  { path: 'cliente', component: ClientComponent },
  { path: 'cliente/create', component: ClientCreateComponent },
  { path: 'cliente/edit', component: ClientEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
