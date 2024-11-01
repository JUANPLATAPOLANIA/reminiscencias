import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VersalaPage } from './versala.page';

describe('VersalaPage', () => {
  let component: VersalaPage;
  let fixture: ComponentFixture<VersalaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VersalaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
