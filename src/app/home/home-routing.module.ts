import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'accion',
    loadChildren: () => import('./accion/accion.module').then( m => m.AccionPageModule)
  },
  {
    path: 'drama',
    loadChildren: () => import('./drama/drama.module').then( m => m.DramaPageModule)
  },
  {
    path: 'misterio',
    loadChildren: () => import('./misterio/misterio.module').then( m => m.MisterioPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
