import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffrebancaireComponent } from './offrebancaire.component';

describe('OffrebancaireComponent', () => {
  let component: OffrebancaireComponent;
  let fixture: ComponentFixture<OffrebancaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffrebancaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffrebancaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
