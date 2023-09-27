import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuverturecompteComponent } from './ouverturecompte.component';

describe('OuverturecompteComponent', () => {
  let component: OuverturecompteComponent;
  let fixture: ComponentFixture<OuverturecompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuverturecompteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OuverturecompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
