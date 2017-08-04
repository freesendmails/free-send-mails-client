import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerDocumentationComponent } from './container-documentation.component';

describe('ContainerDocumentationComponent', () => {
  let component: ContainerDocumentationComponent;
  let fixture: ComponentFixture<ContainerDocumentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerDocumentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
