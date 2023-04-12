import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material.module';
import { PhotoItemComponent } from './components/photo-item/photo-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
    HeaderComponent,
    PhotoItemComponent,
  ],
    imports: [MaterialModule, RouterModule],
    exports: [HeaderComponent, PhotoItemComponent],
})
export class SharedModule {}