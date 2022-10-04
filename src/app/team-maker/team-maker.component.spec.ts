import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMakerComponent } from './team-maker.component';

describe('TeamMakerComponent', () => {
  let component: TeamMakerComponent;
  let fixture: ComponentFixture<TeamMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamMakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
