import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square } from 'ionicons/icons';
import { PushService } from 'src/app/services/push.service';
import {UserService} from "../../../services/user.service";
import {Capacitor} from "@capacitor/core";

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor(private pushService: PushService,
              private userService: UserService) {
    addIcons({ triangle, ellipse, square });
    this.setInitLogic();
  }

  async setInitLogic() {
    await this.userService.checkIfUserExists();
    const isPushNotificationsAvailable = Capacitor.isPluginAvailable('PushNotifications');

    if (isPushNotificationsAvailable) {
      this.pushService.registerNotifications();
      this.pushService.addListeners();
      this.pushService.getDeliveredNotifications();
    }
  }

}
