import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseticketComponent } from './closeticket.component';

describe('CloseticketComponent', () => {
  let component: CloseticketComponent;
  let fixture: ComponentFixture<CloseticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloseticketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CloseticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
