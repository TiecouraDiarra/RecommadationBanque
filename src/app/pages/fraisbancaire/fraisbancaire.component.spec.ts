import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraisbancaireComponent } from './fraisbancaire.component';

describe('FraisbancaireComponent', () => {
  let component: FraisbancaireComponent;
  let fixture: ComponentFixture<FraisbancaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FraisbancaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FraisbancaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
