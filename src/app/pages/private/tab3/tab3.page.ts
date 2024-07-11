import { Component } from '@angular/core';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { Geolocation } from '@capacitor/geolocation';
import {GoogleMap, MapAdvancedMarker, MapInfoWindow} from '@angular/google-maps';
import {IonicModule} from "@ionic/angular";
import {MapComponent} from "../../../shared/map/map.component";
import {LoadingController} from "@ionic/angular/standalone";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, HeaderComponent, GoogleMap, MapAdvancedMarker, MapInfoWindow, MapComponent],
})
export class Tab3Page {

  title = "Tab 3 Sample";

  center: google.maps.LatLngLiteral = {
    lat: 0,
    lng: 0
  };
  display!: google.maps.LatLngLiteral;
  options!: google.maps.MapOptions;
  loading?: HTMLIonLoadingElement;

  constructor(private loadingCtrl: LoadingController) {
  }

  ionViewDidEnter() {
    console.log(this.loading);
    this.showLoading().then(() => this.initMap());
  }

  async initMap() {

    const coordinates = await Geolocation.getCurrentPosition();

    const location: google.maps.LatLngLiteral = {
      lat: coordinates.coords.latitude,
      lng: coordinates.coords.longitude
    };

    this.center = location;
    this.display = location;

    this.options = {
      zoom: 10
    };

    this.hideLoading();

  }

  async showLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Localizando...'
    });
    this.loading.present();
  }

  async hideLoading() {
    if(this.loading !== undefined) {
      this.loading.dismiss();
    }
  }

}
