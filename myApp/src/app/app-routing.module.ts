import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { MascotaComponent } from './components/mascota/mascota.component';
import { PublicarComponent } from './components/publicar/publicar.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: 'users',
    component: UserComponent
  },
  {
    path: 'pets',
    component: MascotaComponent
  },
  {
    path: 'categories',
    component: CategoriaComponent
  },
  {
    path: 'publication',
    component: PublicarComponent
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'**',
    redirectTo: 'home'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
