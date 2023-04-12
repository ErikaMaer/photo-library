import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SinglePhotoPageRoutingModule } from './single-photo-page-routing.module';
import { SinglePhotoPageComponent } from './single-photo-page.component';

@NgModule({
    declarations: [SinglePhotoPageComponent],
    imports: [SinglePhotoPageRoutingModule, SharedModule, MaterialModule, CommonModule, HttpClientModule],
})
export class SinglePhotoPageModule {}