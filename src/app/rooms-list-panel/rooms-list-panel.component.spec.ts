import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsListPanelComponent } from './rooms-list-panel.component';

describe('RoomsListPanelComponent', () => {
  let component: RoomsListPanelComponent;
  let fixture: ComponentFixture<RoomsListPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomsListPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsListPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
