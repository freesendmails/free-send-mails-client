import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMailComponent } from './test-mail.component';

describe('TestMailComponent', () => {
  let component: TestMailComponent;
  let fixture: ComponentFixture<TestMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
