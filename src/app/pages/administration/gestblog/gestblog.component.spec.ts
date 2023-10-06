import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestblogComponent } from './gestblog.component';

describe('GestblogComponent', () => {
  let component: GestblogComponent;
  let fixture: ComponentFixture<GestblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestblogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
