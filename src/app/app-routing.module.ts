import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/photos/photos.module').then((m) => m.PhotosModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./features/favorites/favorites.module').then((m) => m.FavoritesModule)
  },
  {
    path: 'photos/:id',
    loadChildren: () => import('./features/single-photo-page/single-photo-page.module').then((m) => m.SinglePhotoPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
