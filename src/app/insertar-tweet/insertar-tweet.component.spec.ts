import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarTweetComponent } from './insertar-tweet.component';

describe('InsertarTweetComponent', () => {
  let component: InsertarTweetComponent;
  let fixture: ComponentFixture<InsertarTweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertarTweetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
