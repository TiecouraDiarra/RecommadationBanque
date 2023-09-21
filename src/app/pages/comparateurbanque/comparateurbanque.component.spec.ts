import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparateurbanqueComponent } from './comparateurbanque.component';

describe('ComparateurbanqueComponent', () => {
  let component: ComparateurbanqueComponent;
  let fixture: ComponentFixture<ComparateurbanqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparateurbanqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparateurbanqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
