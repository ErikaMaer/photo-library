import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosModule } from './features/photos/photos.module';
import { FavoritesModule } from './features/favorites/favorites.module';
import { SinglePhotoPageModule } from './features/single-photo-page/single-photo-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhotosModule,
    FavoritesModule,
    SinglePhotoPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
