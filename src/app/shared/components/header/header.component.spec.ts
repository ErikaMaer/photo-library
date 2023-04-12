import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MaterialModule } from 'src/app/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { ChangeDetectionStrategy } from '@angular/core';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MaterialModule, RouterTestingModule ],
      declarations: [ HeaderComponent ]
    })
    .overrideComponent(HeaderComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain two buttons', () => {
    let headerButton = fixture.debugElement.queryAll(By.css('button')); 
    expect(headerButton.length).toBe(2);
  });

  it('should have correct attributes inside buttons', () => {
    let buttons = fixture.debugElement.nativeElement.querySelectorAll('.header__btn'); 
    expect(buttons[0].ariaLabel).toBe('Photos button');
    expect(buttons[1].ariaLabel).toBe('Favorites button');
  });
});
