import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryLinksComponent } from './registry-links.component';

describe('RegistryLinksComponent', () => {
  let component: RegistryLinksComponent;
  let fixture: ComponentFixture<RegistryLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistryLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistryLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
