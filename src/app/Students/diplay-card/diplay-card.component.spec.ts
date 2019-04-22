import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplayCardComponent } from './diplay-card.component';

describe('DiplayCardComponent', () => {
  let component: DiplayCardComponent;
  let fixture: ComponentFixture<DiplayCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiplayCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiplayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
