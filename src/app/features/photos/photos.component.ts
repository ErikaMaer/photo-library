import { Component,OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { PhotoItem } from 'src/app/interfaces/photoItem';
import { store } from 'src/app/shared/constants';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnInit {
  photoItems: PhotoItem[] = [];
  loading = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.fetchMore();
  }

  fetchMore(): void {
    const newItems: PhotoItem[] = [];
    for (let i = 0; i < 9; i++) {
      const randomPhotoId = Math.round(Math.random() * 85);
      newItems.push({
        id: randomPhotoId,
        image: this.apiService.getPhotoUrl(randomPhotoId),
      });
    }

    this.loading = true;
    timer(1000).subscribe(() => {
      this.loading = false;
      this.photoItems = [...this.photoItems, ...newItems];
    });
  }

  onScroll(event: any): void {
    let tracker = event.target;
    let limit = tracker.scrollHeight - tracker.clientHeight;
    if (event.target.scrollTop >= limit) {
      this.fetchMore();
    }
  }

  OnClick(event: any): void {
    const id = event.target.id;
    if (!store.length && localStorage.getItem("data")) {
      const values = JSON.parse(localStorage.getItem("data") || '');
      values.map((el: string) => store.push(el));
    }

    if (id && !store.includes(id)) {
      store.push(id);
      localStorage.setItem("data", JSON.stringify(store));
    }
  }
}
