import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
// import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { PhotoItem } from '../models/photo.types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
//   private _loading: boolean = false;
//   public get loading() {
//     return this._loading;
//   }
//   private set loading(value: boolean) {
//     this._loading = value;
//   }
  constructor() {}

 getItems(): PhotoItem[] {
   // return this.http.get<PhotoItem[]>(`${environment.serverUrl}/api/menu/items`);
   const newItems: PhotoItem[] = [];
   for (let i = 0; i < 9; i++) {
     const randomPhotoId = Math.round(Math.random() * 85);
     newItems.push({
       id: randomPhotoId,
       image: `https://picsum.photos/id/${randomPhotoId}/200`
     });
   }
   return newItems;
  }

//   getItem(id: number | string): Observable<PhotoItem> {
//     return this.http.get<PhotoItem>(
//       `${environment.serverUrl}/api/menu/items/${id.toString()}`
//     );
//   }
}