import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'boasvindas',
    pathMatch: 'full'
  },
  {
    path: 'boasvindas',
    loadChildren: () => import('./boasvindas/boasvindas.module').then( m => m.BoasvindasPageModule)
  },
  {
    path: 'resultado/:entrada',
    loadChildren: () => import('./resultado/resultado.module').then( m => m.ResultadoPageModule)
  },
  {
    path: 'ajuda',
    loadChildren: () => import('./ajuda/ajuda.module').then( m => m.AjudaPageModule)
  },
  {
    path: 'carregamento/:entrada',
    loadChildren: () => import('./carregamento/carregamento.module').then( m => m.CarregamentoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
