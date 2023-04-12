import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material.module';
import { PhotoItemComponent } from './components/photo-item/photo-item.component';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';
import { InfiniteScrollerDirective } from './directives/infinitescroll.directive';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
    HeaderComponent,
    PhotoItemComponent,
    InfiniteScrollComponent,
    InfiniteScrollerDirective
  ],
    imports: [MaterialModule, RouterModule],
    exports: [HeaderComponent, PhotoItemComponent, InfiniteScrollerDirective],
})
export class SharedModule {}