import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMailErrorComponent } from './test-mail-error.component';

describe('TestMailErrorComponent', () => {
  let component: TestMailErrorComponent;
  let fixture: ComponentFixture<TestMailErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMailErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMailErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
