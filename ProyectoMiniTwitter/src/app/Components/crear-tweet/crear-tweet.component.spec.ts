import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTweetComponent } from './crear-tweet.component';

describe('CrearTweetComponent', () => {
  let component: CrearTweetComponent;
  let fixture: ComponentFixture<CrearTweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTweetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
