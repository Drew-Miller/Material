import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const defaultModule = 'home';

const routes: Routes = [
  { path: '', redirectTo: defaultModule, pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('pages/home/home.module').then(x => x.HomeModule)},
  { path: 'gallery', loadChildren: () => import('pages/gallery/gallery.module').then(x => x.GalleryModule)},
  { path: 'forms', loadChildren: () => import('pages/forms/forms.module').then(x => x.FormsModule)},
  { path: 'schematics', loadChildren: () => import('pages/schematics/schematics.module').then(x => x.SchematicsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
