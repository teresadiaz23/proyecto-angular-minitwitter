import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarTweetsComponent } from './visualizar-tweets.component';

describe('VisualizarTweetsComponent', () => {
  let component: VisualizarTweetsComponent;
  let fixture: ComponentFixture<VisualizarTweetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarTweetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
