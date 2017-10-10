import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationUsersErrorComponent } from './authentication-users-error.component';

describe('AuthenticationUsersErrorComponent', () => {
  let component: AuthenticationUsersErrorComponent;
  let fixture: ComponentFixture<AuthenticationUsersErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticationUsersErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationUsersErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
