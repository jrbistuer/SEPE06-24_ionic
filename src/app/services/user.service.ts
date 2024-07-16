import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  Firestore,
  query, setDoc, updateDoc,
  where
} from "@angular/fire/firestore";
import {Auth, User, UserCredential} from "@angular/fire/auth";
import {Observable} from "rxjs";
import {IUser, IVacanca} from "../models/interfaces";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: Firestore,
              private auth: Auth
  ) { }

  async checkIfUserExists() {
    return new Promise((success, error) => {
      this.getUserById(this.auth.currentUser!.uid).subscribe((user: IUser) => {
        console.log('user', user);
        if (user === undefined) {
          const test = this.saveUser(this.auth.currentUser!);
          console.log('test', test);
          success(true);
        } else {
          success(false);
        }
      })
    })
  }

  private getUserById(id: string): Observable<IUser> {
    const userDocRef = doc(this.firestore, `users/${id}`);
    return docData(userDocRef, { idField: 'id' }) as Observable<IUser>;
  }

  saveUser(user: User) {
    const u: IUser = {
      id: user.uid,
      email: user.email || '',
      pushToken: ''
    }
    return setDoc(doc(this.firestore, 'users', this.auth.currentUser!.uid), u);
  }

  updateUser(user: IUser) {
    const userDocRef = doc(this.firestore, `users/${user.id}`);
    return updateDoc(userDocRef, { ...user });
  }

  setUserPushToken(token: string) {
    this.getUserById(this.auth.currentUser!.uid).subscribe((user: IUser) => {
      user.pushToken = token;
      this.updateUser(user);
    })
  }

}
