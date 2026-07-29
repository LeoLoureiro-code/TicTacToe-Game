import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGameMenuComponent } from './new-game-menu-component';

describe('NewGameMenuComponent', () => {
  let component: NewGameMenuComponent;
  let fixture: ComponentFixture<NewGameMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewGameMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewGameMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
