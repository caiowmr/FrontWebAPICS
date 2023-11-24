import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetorComponent } from './setor.component';

describe('SetorComponent', () => {
  let component: SetorComponent;
  let fixture: ComponentFixture<SetorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetorComponent]
    });
    fixture = TestBed.createComponent(SetorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
