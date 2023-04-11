import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Observable, map, timer } from 'rxjs';
import { FillPipe } from 'src/app/shared/pipes/generate-image.pipe';


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
  imagesList: Image[] = [];

  constructor() {}

  ngOnInit() {
    this.fetchMore();
  }

  fetchMore(): void {
    const newItems: any[] = [];
    for (let i = 0; i < 21; i++) {
      const randomListNumber = Math.round(Math.random() * 100);
      const randomPhotoId = Math.round(Math.random() * 85);
      newItems.push({
        title: 'List Item ' + randomListNumber,
        content: 'This is some description of the list - item # ' + randomListNumber,
        image: `https://picsum.photos/id/${randomPhotoId}/200`
      });
    }

    this.loading = true;
    timer(1000).subscribe(() => {
      this.loading = false;
      this.listItems = [...this.listItems, ...newItems];
    });
  }
  onScroll(event: any) {
    let tracker = event.target;
    let limit = tracker.scrollHeight - tracker.clientHeight;
    if (event.target.scrollTop >= limit) {
      this.fetchMore();
    }
    // if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
    //   console.log("End");
    //   this.fetchMore();
    // }
  }
}
