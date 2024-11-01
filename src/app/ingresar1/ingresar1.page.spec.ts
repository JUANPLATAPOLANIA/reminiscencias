import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ingresar1Page } from './ingresar1.page';

describe('Ingresar1Page', () => {
  let component: Ingresar1Page;
  let fixture: ComponentFixture<Ingresar1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Ingresar1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
