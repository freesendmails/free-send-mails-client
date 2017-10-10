import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationUserSuccessAuthenticatedComponent } from './authentication-user-success-authenticated.component';

describe('AuthenticationUserSuccessAuthenticatedComponent', () => {
  let component: AuthenticationUserSuccessAuthenticatedComponent;
  let fixture: ComponentFixture<AuthenticationUserSuccessAuthenticatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticationUserSuccessAuthenticatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationUserSuccessAuthenticatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
