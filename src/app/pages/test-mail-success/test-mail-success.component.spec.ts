import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMailSuccessComponent } from './test-mail-success.component';

describe('TestMailSuccessComponent', () => {
  let component: TestMailSuccessComponent;
  let fixture: ComponentFixture<TestMailSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMailSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMailSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
