import { Injectable } from '@angular/core';
import { IVacanca } from '../model/interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IconOptions } from '@angular/material/icon';

@Injectable({
  providedIn: 'root'
})
export class VacancesService {

  constructor(private http: HttpClient) { }

  getVacances(): Observable<IVacanca[]> {
//    if (window.localStorage.getItem('vacances') !== null) {
//      return JSON.parse(window.localStorage.getItem('vacances')!);
//    } else {
//      return [];
//    }
    return this.http.get<IVacanca[]>('http://demo6402609.mockable.io/vacances');
  }

  setVacanca(vacanca: IVacanca) {
    //const vacances = this.getVacances();
    //vacances.push(vacanca);
    //this.saveVacances(vacances);
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<IVacanca>('http://demo6402609.mockable.io/vacances', vacanca, { headers });
  }

  editVacanca(i: number, v: IVacanca) {
    const vacances = this.getVacances();
   // vacances[i] = v;
   // this.saveVacances(vacances);
  }

  getVacancaByIndex(index: number) {
    const vacances = this.getVacances();
   // return vacances[index];
  }

  removeVacancaByIndex(index: number) {
    const vacances = this.getVacances();
  //  vacances.splice(index, 1);
  //  this.saveVacances(vacances);
  }

  private saveVacances(vacances: IVacanca[]) {
    window.localStorage.setItem('vacances', JSON.stringify(vacances));
  }

}
