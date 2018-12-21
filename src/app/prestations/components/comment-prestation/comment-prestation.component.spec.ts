import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentPrestationComponent } from './comment-prestation.component';

describe('CommentPrestationComponent', () => {
  let component: CommentPrestationComponent;
  let fixture: ComponentFixture<CommentPrestationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentPrestationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentPrestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
