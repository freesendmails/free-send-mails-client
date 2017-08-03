import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerExampleComponent } from './container-example.component';

describe('ContainerExampleComponent', () => {
  let component: ContainerExampleComponent;
  let fixture: ComponentFixture<ContainerExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
