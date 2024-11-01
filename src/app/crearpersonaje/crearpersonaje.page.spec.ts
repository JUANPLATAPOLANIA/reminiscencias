import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearpersonajePage } from './crearpersonaje.page';

describe('CrearpersonajePage', () => {
  let component: CrearpersonajePage;
  let fixture: ComponentFixture<CrearpersonajePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearpersonajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
