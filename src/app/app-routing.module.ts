import { PerfilComponent } from './components/perfil/perfil.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'inicio', component:InicioComponent},
  {path:'catalogo', component:CatalogoComponent},
  {path:'faqs', component:FaqsComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'perfil', component:PerfilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
