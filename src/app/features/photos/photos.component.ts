import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Observable, map, timer } from 'rxjs';
import { store } from 'src/app/shared/constants';
import { FillPipe } from 'src/app/shared/pipes/generate-image.pipe';
import { Store } from "@ngrx/store";
import { appLoaded } from "../../core/state/menus";
import { addPhotoItemFormSubmitted } from "src/app/core/state/menus";
import { BasePhotoItem, PhotoItem } from 'src/app/core/models/photo.types';
import { ApiService } from 'src/app/core/services/api.service';


export interface Image {
  id: number,
  author: string,
  width: number,
  height:number,
  url: string,
  download_url:string,
}

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  providers: [ FillPipe ] ,
})
export class PhotosComponent implements OnInit {
  listItems: any[] = [];
  loading = false;

  constructor(private store: Store, private apiService: ApiService) {}

  ngOnInit() {
    this.store.dispatch(appLoaded());
    this.listItems = this.apiService.getItems();

    console.log('tut', this.listItems, this.loading);
  }

  fetchMore(): void {
    // const newItems: any[] = [];
    // for (let i = 0; i < 9; i++) {
    //   const randomPhotoId = Math.round(Math.random() * 85);
    //   newItems.push({
    //     id: randomPhotoId,
    //     image: `https://picsum.photos/id/${randomPhotoId}/200`
    //   });
    // }

    // this.loading = true;
    // timer(1000).subscribe(() => {
    //   this.loading = false;
    //   this.listItems = [...this.listItems, ...newItems];
    // });
  }
  onScroll(event: any) {
    let tracker = event.target;
    let limit = tracker.scrollHeight - tracker.clientHeight;
    if (event.target.scrollTop >= limit) {
      this.loading = true;
      const a = this.apiService.getItems();
      timer(1000).subscribe(() => {
        this.loading = false;
        console.log('v1', this.listItems);
        this.listItems = [...this.listItems, ...a];
        console.log(this.listItems);
       });
    }
  }

  OnClick(event: any) {
    console.log(event.id);
    // const id = event.target.id;
    // if (id) {
    //   store.push(id);
    // }
    this.store.dispatch(
      addPhotoItemFormSubmitted({
        photoItem: event,
      })
    );
  }
}
