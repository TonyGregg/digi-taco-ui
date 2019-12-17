import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TacoItemComponent } from './taco-item.component';

describe('TacoItemComponent', () => {
  let component: TacoItemComponent;
  let fixture: ComponentFixture<TacoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
