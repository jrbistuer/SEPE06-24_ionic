import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { AdvertComponent } from 'src/app/shared/advert/advert.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonContent, HeaderComponent, AdvertComponent],
})
export class Tab1Page {

  title = 'Tab 1 Sample';

  constructor() {
  }

}
