import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, IonIcon, IonFabButton, IonFab, IonModal, IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonItem, IonInput, IonList, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { IVacanca } from 'src/app/models/interfaces';
import { VacancesService } from 'src/app/services/vacances.service';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { OverlayEventDetail } from '@ionic/core/components';
import { FormsModule } from '@angular/forms';
import { VacancaFormComponent } from 'src/app/shared/vacanca-form/vacanca-form.component';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonList, IonInput, IonItem, IonTitle, IonButton, IonButtons, IonToolbar, IonHeader, IonModal, IonFab, IonFabButton, IonIcon, IonContent, HeaderComponent, FormsModule, VacancaFormComponent]
})
export class Tab2Page implements OnInit {

  title = "Tab 2 Sample";
  vacances: IVacanca[] = [];

  @ViewChild(IonModal) modal!: IonModal;

  constructor(private vacancesService: VacancesService,
    private auth: Auth
  ) {
    addIcons({
      add
    });
  }

  ngOnInit() {
    console.log('TAB2 onInit');
    
  }

  ionViewWillEnter() {
    console.log('TAB2 ionViewWillEnter');
    this.vacancesService.getVacances().subscribe((vacances: IVacanca[]) => {
      console.log(vacances);
      this.vacances = vacances;
    });
  }

  addVacanca(vacanca: IVacanca) {
    console.log(vacanca);
    this.modal.dismiss(vacanca, 'add');    
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<IVacanca>>;
    if (ev.detail.role === 'add') {
      const v: IVacanca = ev.detail.data!;
      v.user = this.auth.currentUser!.uid;
      this.vacancesService.addVacanca(v);
    }
  }

}
