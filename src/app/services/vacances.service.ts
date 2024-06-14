import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, deleteDoc, updateDoc, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IVacanca } from '../models/interfaces';
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class VacancesService {

  constructor(private firestore: Firestore,
    private auth: Auth
  ) { }

  getVacances(): Observable<IVacanca[]> {
    const vacancesRef = collection(this.firestore, 'vacances');
    const q = query(vacancesRef, where('user', '==', this.auth.currentUser!.uid) );
    return collectionData(q, { idField: 'id'}) as Observable<IVacanca[]>;
  }

  getVacancaById(id: string): Observable<IVacanca> {
    const vacancaDocRef = doc(this.firestore, `vacances/${id}`);
    return docData(vacancaDocRef, { idField: 'id' }) as Observable<IVacanca>;
  }

  addVacanca(vacanca: IVacanca) {
    const vacancesRef = collection(this.firestore, 'vacances');
    return addDoc(vacancesRef, vacanca);
  }

  deleteVacanca(vacanca: IVacanca) {
    const vacancaDocRef = doc(this.firestore, `vacances/${vacanca.id}`);
    return deleteDoc(vacancaDocRef);
  }

  updateVacancae(vacanca: IVacanca) {
    const vacancaDocRef = doc(this.firestore, `vacances/${vacanca.id}`);
    return updateDoc(vacancaDocRef, { ...vacanca });
  }

}
