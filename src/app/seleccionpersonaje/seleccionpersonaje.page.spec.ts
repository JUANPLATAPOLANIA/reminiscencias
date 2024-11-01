import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeleccionpersonajePage } from './seleccionpersonaje.page';

describe('SeleccionpersonajePage', () => {
  let component: SeleccionpersonajePage;
  let fixture: ComponentFixture<SeleccionpersonajePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionpersonajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
