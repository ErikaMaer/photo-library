import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoItem } from 'src/app/interfaces/photoItem';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesComponent implements OnInit {
  photoItems: PhotoItem[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    const store = JSON.parse(localStorage.getItem("data") || '{}');

    for (let i = 0; i < store.length; i++) {
      this.photoItems.push({
        id: store[i],
        image: `https://picsum.photos/id/${store[i]}/200`
      });
    }
  }

  OnClick(event: any) {
    this.router.navigate(['photos', event.target.id]);
  }
}
