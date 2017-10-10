import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationUsersSuccessComponent } from './authentication-users-success.component';

describe('AuthenticationUsersSuccessComponent', () => {
  let component: AuthenticationUsersSuccessComponent;
  let fixture: ComponentFixture<AuthenticationUsersSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticationUsersSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationUsersSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
