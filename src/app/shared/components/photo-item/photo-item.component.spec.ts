import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoItemComponent } from './photo-item.component';
import { By } from '@angular/platform-browser';
import { ChangeDetectionStrategy } from '@angular/core';

describe('PhotoItemComponent', () => {
  let component: PhotoItemComponent;
  let fixture: ComponentFixture<PhotoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoItemComponent ]
    })
    .overrideComponent(PhotoItemComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain one image', () => {
    let img = fixture.debugElement.queryAll(By.css('img')); 
    expect(img.length).toBe(1);
  });

  it('should contain correct attributes', () => {
    component.imageId = 1;
    component.imageUrl = 'img';
    fixture.detectChanges(); 
    let img = fixture.debugElement.nativeElement.querySelector('img'); 
    expect(img.src).toContain('img');
    expect(+img.id).toBe(1);
  });
});
