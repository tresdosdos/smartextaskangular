import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalPanelComponent } from './functional-panel.component';

describe('FunctionalPanelComponent', () => {
  let component: FunctionalPanelComponent;
  let fixture: ComponentFixture<FunctionalPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionalPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
