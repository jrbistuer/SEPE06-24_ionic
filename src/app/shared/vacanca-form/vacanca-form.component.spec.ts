import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancaFormComponent } from './vacanca-form.component';

describe('VacancaFormComponent', () => {
  let component: VacancaFormComponent;
  let fixture: ComponentFixture<VacancaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacancaFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacancaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
