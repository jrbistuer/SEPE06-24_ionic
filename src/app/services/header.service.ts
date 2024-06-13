import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  public isSmileyShown = false;

  constructor() { }

  showSmiley() {
    this.isSmileyShown = !this.isSmileyShown;
  }

}
