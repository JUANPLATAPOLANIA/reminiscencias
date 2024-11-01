import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Jugador2Page } from './jugador2.page';

describe('Jugador2Page', () => {
  let component: Jugador2Page;
  let fixture: ComponentFixture<Jugador2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Jugador2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
