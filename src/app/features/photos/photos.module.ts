import { NgModule } from '@angular/core';
import { PhotosComponent } from './photos.component';
import { PhotosRoutingModule } from './photos-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material.module';
import { FillPipe } from 'src/app/shared/pipes/generate-image.pipe';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [PhotosComponent, FillPipe],
    imports: [PhotosRoutingModule, SharedModule, MaterialModule, CommonModule, HttpClientModule],
})
export class PhotosModule {}