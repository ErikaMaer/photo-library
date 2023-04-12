import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { store } from 'src/app/shared/constants';

@Component({
  selector: 'app-single-photo-page',
  templateUrl: './single-photo-page.component.html',
  styleUrls: ['./single-photo-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SinglePhotoPageComponent implements OnInit {
  photoId: number = 0;
  photoUrl: string = '';
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((res) => {
      this.photoId = res['id'];
      this.photoUrl = `https://picsum.photos/id/${this.photoId}/200`;
    });
  }

  OnClick(event: Event) {
    if (!store.length) {
      const values = JSON.parse(localStorage.getItem("data") || '');
      values.map((el: string) => store.push(el));
    }
    const index = store.indexOf(this.photoId.toString());
    store.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(store));
  }
}
