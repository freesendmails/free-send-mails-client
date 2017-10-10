import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationUsersComponent } from './authentication-users.component';

describe('AuthenticationUsersComponent', () => {
  let component: AuthenticationUsersComponent;
  let fixture: ComponentFixture<AuthenticationUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticationUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
