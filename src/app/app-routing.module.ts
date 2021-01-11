import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const defaultModule = 'tab';

const routes: Routes = [
  { path: '', redirectTo: defaultModule, pathMatch: 'full' },
  { path: 'tab', loadChildren: () => import('pages/tab/tab.module').then(x => x.TabModule)},
  { path: 'message', loadChildren: () => import('pages/message/message.module').then(x => x.MessageModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
