import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNotesComponent } from './show-notes.component';

describe('ShowNotesComponent', () => {
  let component: ShowNotesComponent;
  let fixture: ComponentFixture<ShowNotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowNotesComponent]
    });
    fixture = TestBed.createComponent(ShowNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
