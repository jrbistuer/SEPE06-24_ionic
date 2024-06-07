import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logOutOutline } from 'ionicons/icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class Tab1Page {

  constructor(private authService: AuthService,
    private router: Router
  ) {
    addIcons({
      logOutOutline
    });
  }

  logOut() {
    this.authService.logout().then(() => {
      this.router.navigateByUrl('/login', { replaceUrl: true });
    })
  }
}
