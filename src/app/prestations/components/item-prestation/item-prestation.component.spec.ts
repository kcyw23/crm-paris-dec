import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPrestationComponent } from './item-prestation.component';

describe('ItemPrestationComponent', () => {
  let component: ItemPrestationComponent;
  let fixture: ComponentFixture<ItemPrestationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPrestationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPrestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
