import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEnterpriseComponent } from './card-enterprise.component';

describe('CardEnterpriseComponent', () => {
  let component: CardEnterpriseComponent;
  let fixture: ComponentFixture<CardEnterpriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardEnterpriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
