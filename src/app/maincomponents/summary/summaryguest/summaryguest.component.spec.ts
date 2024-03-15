import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryguestComponent } from './summaryguest.component';

describe('SummaryguestComponent', () => {
  let component: SummaryguestComponent;
  let fixture: ComponentFixture<SummaryguestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummaryguestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SummaryguestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
