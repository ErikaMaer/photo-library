import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { SinglePhotoPageComponent } from './single-photo-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/material.module';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { PhotoItemComponent } from 'src/app/shared/components/photo-item/photo-item.component';
import { By } from '@angular/platform-browser';
import { ChangeDetectionStrategy } from '@angular/core';

describe('SinglePhotoPageComponent', () => {
  let component: SinglePhotoPageComponent;
  let fixture: ComponentFixture<SinglePhotoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MaterialModule, RouterTestingModule ],
      declarations: [ SinglePhotoPageComponent, HeaderComponent, PhotoItemComponent ]
    })
    .overrideComponent(SinglePhotoPageComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePhotoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-header')).toBeTruthy();
});

it('should have correct text in button', () => {
  let button = fixture.debugElement.query(By.css('.single-photo-wrapper button')).nativeElement; 
  expect(button.textContent.trim()).toBe('Remove from favorites');
});

it('should contain only one picture', () => {
  let photoItem = fixture.debugElement.queryAll(By.css('.single-photo-wrapper app-photo-item')); 
  expect(photoItem.length).toBe(1);
});

it('should have correct attributes', () => {
  let button = fixture.debugElement.nativeElement.querySelector('.single-photo-wrapper button'); 
  expect(button.ariaLabel).toBe('Remove button');
});
});
