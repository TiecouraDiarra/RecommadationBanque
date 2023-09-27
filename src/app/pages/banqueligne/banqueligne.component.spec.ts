import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanqueligneComponent } from './banqueligne.component';

describe('BanqueligneComponent', () => {
  let component: BanqueligneComponent;
  let fixture: ComponentFixture<BanqueligneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanqueligneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanqueligneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
