import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskViewComponent } from './taskview.component';

describe('TaskviewComponent', () => {
  let component: TaskViewComponent;
  let fixture: ComponentFixture<TaskViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
