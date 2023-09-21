import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailbanqueComponent } from './detailbanque.component';

describe('BanqueComponent', () => {
  let component: DetailbanqueComponent;
  let fixture: ComponentFixture<DetailbanqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailbanqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailbanqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
