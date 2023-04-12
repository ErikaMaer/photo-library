import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FavoritesComponent } from './favorites.component';
import { FavoritesRoutingModule } from './favorites-routing.module';

@NgModule({
    declarations: [FavoritesComponent],
    imports: [FavoritesRoutingModule, SharedModule, MaterialModule, CommonModule, HttpClientModule],
})
export class FavoritesModule {}