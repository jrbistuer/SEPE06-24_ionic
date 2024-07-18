import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent, IonHeader, IonTitle, IonToolbar, LoadingController} from '@ionic/angular/standalone';
import {ActivatedRoute, Router} from "@angular/router";
import {VacancesService} from "../../../services/vacances.service";
import {Observable} from "rxjs";
import {IVacanca} from "../../../models/interfaces";
import {HeaderComponent} from "../../../shared/header/header.component";

@Component({
  selector: 'app-vacances-detail',
  templateUrl: './vacances-detail.page.html',
  styleUrls: ['./vacances-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class VacancesDetailPage {

  private index!: string;
  vacanca$!: Observable<IVacanca>;

  title = '';
  private loading!: HTMLIonLoadingElement;

  constructor(private activatedRoute: ActivatedRoute,
              private vacancesService: VacancesService,
              private loadingCtrl: LoadingController) {
    this.showLoading();
  }

  ionViewDidEnter() {
    this.activatedRoute.params.subscribe(params => {
      this.index = params['id'];
      this.vacanca$ = this.vacancesService.getVacancaById(this.index);
    })
  }

  async showLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Carregant vacances...',
      duration: 400
    });
    this.loading.present();
  }

}
