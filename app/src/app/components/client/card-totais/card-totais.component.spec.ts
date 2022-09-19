import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTotaisComponent } from './card-totais.component';

describe('CardTotaisComponent', () => {
  let component: CardTotaisComponent;
  let fixture: ComponentFixture<CardTotaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTotaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTotaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
