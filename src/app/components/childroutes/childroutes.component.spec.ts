import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildroutesComponent } from './childroutes.component';

describe('ChildroutesComponent', () => {
  let component: ChildroutesComponent;
  let fixture: ComponentFixture<ChildroutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildroutesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildroutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
