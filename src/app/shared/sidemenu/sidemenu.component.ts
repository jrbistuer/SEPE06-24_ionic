import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonMenu,
  IonTitle,
  IonToolbar,
  MenuController
} from "@ionic/angular/standalone";
import {addIcons} from "ionicons";
import {homeOutline, people} from "ionicons/icons";

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
  imports: [IonHeader, IonTitle, IonToolbar, IonMenu, IonList, IonItem, IonIcon, IonContent],
  standalone: true
})
export class SidemenuComponent {

  constructor(private router: Router,
              private menuCtrl: MenuController) {
    addIcons({
      homeOutline,
      people
    });
  }

  goToPage(page: string) {
    this.router.navigateByUrl(page, { replaceUrl: true });
    this.menuCtrl.close();
  }

}
