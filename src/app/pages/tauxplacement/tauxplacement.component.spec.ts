import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TauxplacementComponent } from './tauxplacement.component';

describe('TauxplacementComponent', () => {
  let component: TauxplacementComponent;
  let fixture: ComponentFixture<TauxplacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TauxplacementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TauxplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
