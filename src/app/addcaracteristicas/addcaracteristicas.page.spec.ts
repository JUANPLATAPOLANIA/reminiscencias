import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddcaracteristicasPage } from './addcaracteristicas.page';

describe('AddcaracteristicasPage', () => {
  let component: AddcaracteristicasPage;
  let fixture: ComponentFixture<AddcaracteristicasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcaracteristicasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
