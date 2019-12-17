import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TacoDetailComponent } from './taco-detail.component';

describe('TacoDetailComponent', () => {
  let component: TacoDetailComponent;
  let fixture: ComponentFixture<TacoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
