import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VacancesDetailPage } from './vacances-detail.page';

describe('VacancesDetailPage', () => {
  let component: VacancesDetailPage;
  let fixture: ComponentFixture<VacancesDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancesDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
