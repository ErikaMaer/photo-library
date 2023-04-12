import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { store } from 'src/app/shared/constants';
import { Store } from "@ngrx/store";
import { selectPhotoItems } from "src/app/core/state/menus";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  listItems: any[] = [];
  photoItems$ = this.store.select(selectPhotoItems);

  constructor(private router: Router, private store: Store) {}

  ngOnInit() {
    console.log(store);
    for (let i = 0; i < store.length; i++) {
      this.listItems.push({
        id: store[i],
        image: `https://picsum.photos/id/${store[i]}/200`
      });
    }
  }

  OnClick(event: any) {
    console.log(event.target.id);
    this.router.navigate(['photos', event.target.id]);
    //const id = event.target.id;
    // if (id) {
    //   store.push(id);
    // }
  }
}
