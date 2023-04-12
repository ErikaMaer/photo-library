import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { store } from 'src/app/shared/constants';
import { deletePhotoItemInitiated } from "src/app/core/state/menus";
import { Store } from "@ngrx/store";
import { selectPhotoItem } from "src/app/core/state/menus";
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-single-photo-page',
  templateUrl: './single-photo-page.component.html',
  styleUrls: ['./single-photo-page.component.scss']
})
export class SinglePhotoPageComponent implements OnInit {
  photoId:number = 0;
  photoUrl: string = '';
  photoItemId$ = this.route.params.pipe(map((params) => params['id']));
  menuItem$ = this.photoItemId$.pipe(
    switchMap((id) => this.store.select(selectPhotoItem({ id: id })))
  );
  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit() {
    this.route.params.subscribe((res) => {
      this.photoId = res['id'];
      this.photoUrl = `https://picsum.photos/id/${this.photoId}/200`;
    });
  }

  OnClick(event: Event) {
    // const index = store.indexOf(this.photoId);
    // store.splice(index, 1);
    this.store.dispatch(deletePhotoItemInitiated({ photoId: this.photoId }));
  }
}
