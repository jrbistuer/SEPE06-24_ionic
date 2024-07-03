import { Component } from '@angular/core';
import { IonContent, IonButton, IonHeader, IonModal, IonToolbar, IonButtons, IonTitle, IonItem } from '@ionic/angular/standalone';
import { IVacanca } from 'src/app/models/interfaces';
import { PushService } from 'src/app/services/push.service';
import { AdvertComponent } from 'src/app/shared/advert/advert.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonItem, IonTitle, IonButtons, IonToolbar, IonModal, IonHeader, IonButton, IonContent, HeaderComponent, AdvertComponent],
})
export class Tab1Page {

  title = 'Tab 1 Sample';

  vacanca: IVacanca = {
    nom: 'test title',
    preu: 234,
    descripcio: 'test descripcio test descripcio test descripcio test descripcio',
    actiu: true
  }

  constructor(private pushService: PushService) {
  }

  openModal() {
    this.pushService.openModal(this.vacanca);
  }

}
