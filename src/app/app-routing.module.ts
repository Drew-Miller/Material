import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const defaultModule = 'home';

const routes: Routes = [
  { path: '', redirectTo: defaultModule, pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('pages/home/home.module').then(x => x.HomeModule)},
  { path: 'tab', loadChildren: () => import('pages/tab/tab.module').then(x => x.TabModule)},
  { path: 'message', loadChildren: () => import('pages/message/message.module').then(x => x.MessageModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
