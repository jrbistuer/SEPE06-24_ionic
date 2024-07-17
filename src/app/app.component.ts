import { Component } from '@angular/core';
import {
  IonApp,
  IonContent,
  IonHeader, IonIcon, IonItem,
  IonList,
  IonMenu,
  IonRouterOutlet,
  IonTitle,
  IonToolbar, MenuController
} from '@ionic/angular/standalone';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonContent, IonHeader, IonTitle, IonToolbar, IonMenu, IonList, IonItem, IonIcon],
})
export class AppComponent {
  constructor(private router: Router,
              private menuCtrl: MenuController) {}

  goToPage(page: string) {
    this.router.navigateByUrl(page, { replaceUrl: true });
    this.menuCtrl.close();
  }
}
