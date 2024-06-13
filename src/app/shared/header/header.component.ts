import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { happyOutline, logOutOutline } from 'ionicons/icons';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { HeaderService } from 'src/app/services/header.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HeaderComponent implements OnDestroy {

  @Input() title!: string;
  showSmiley = false;
  private subscription: Subscription;

  constructor (private authService: AuthService,
    private router: Router,
    public headerService: HeaderService,
    private messageService: MessageService ) {
    addIcons({
      logOutOutline,
      happyOutline
    });
    this.subscription = this.messageService.onMessage().subscribe((showSmiley: any) => {
      console.log(showSmiley.text);
      this.showSmiley = showSmiley.text;
    });
  }

  logOut() {
    this.authService.logout().then(() => {
      this.router.navigateByUrl('/login', { replaceUrl: true });
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
