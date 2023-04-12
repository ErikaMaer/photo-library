import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoItemComponent {
  @Input()
  imageUrl: string = '';
  @Input()
  imageId: number = 0;
}
