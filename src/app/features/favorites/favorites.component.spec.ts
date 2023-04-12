import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { FavoritesComponent } from './favorites.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { MaterialModule } from 'src/app/material.module';
import { RouterTestingModule } from "@angular/router/testing";
import { PhotoItem } from 'src/app/interfaces/photoItem';
import { By } from '@angular/platform-browser';
import { PhotoItemComponent } from 'src/app/shared/components/photo-item/photo-item.component';
import { ChangeDetectionStrategy } from '@angular/core';

describe('FavoritesComponent', () => {
  let component: FavoritesComponent;
  let fixture: ComponentFixture<FavoritesComponent>;
  let photoItemsMock: PhotoItem[] = [
    {id: 1, image: 'img1'},
    {id: 2, image: 'img2'},
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MaterialModule, RouterTestingModule ],
      declarations: [ FavoritesComponent, HeaderComponent, PhotoItemComponent ]
    })
    .overrideComponent(FavoritesComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have click event', fakeAsync(() => {
    spyOn(component, 'OnClick');

    let wrapper = fixture.debugElement.nativeElement.querySelector('.favorites-wrapper');
    wrapper.click();
    tick();
    expect(component.OnClick).toHaveBeenCalled();
  }));

  it('should render header', () => {
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('app-header')).toBeTruthy();
  });

  it('should correctly render app-photo-item', () => {
    component.photoItems = photoItemsMock;
    fixture.detectChanges();
    const photos = fixture.debugElement.queryAll(By.css('app-photo-item'));
    expect(photos.length).toBe(2);
  });

  it('should correctly throw data inside app-photo-item', () => {
    component.photoItems = photoItemsMock;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement.querySelector('app-photo-item img');
    expect(compiled.src).toContain('img1');
    expect(compiled.id).toBe('1');
  });
});
