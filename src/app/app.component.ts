import { Component } from '@angular/core';
import {
  IonApp,
  IonContent,
  IonHeader, IonIcon, IonItem,
  IonList,
  IonMenu,
  IonRouterOutlet,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {Router} from "@angular/router";
import {SidemenuComponent} from "./shared/sidemenu/sidemenu.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonContent, SidemenuComponent],
})
export class AppComponent {

  constructor() {
    console.log('v.1.0.0');
  }

}
