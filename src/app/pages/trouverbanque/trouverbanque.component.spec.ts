import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrouverbanqueComponent } from './trouverbanque.component';

describe('TrouverbanqueComponent', () => {
  let component: TrouverbanqueComponent;
  let fixture: ComponentFixture<TrouverbanqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrouverbanqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrouverbanqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
