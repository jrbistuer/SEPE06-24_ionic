import {Component, Input, OnInit} from '@angular/core';
import {GoogleMap, MapAdvancedMarker, MapInfoWindow} from "@angular/google-maps";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  imports: [
    GoogleMap,
    MapAdvancedMarker,
    MapInfoWindow
  ],
  standalone: true
})
export class MapComponent {

  @Input() center!: google.maps.LatLngLiteral;
  @Input() options!: google.maps.MapOptions;

  adreces = [
    {
      direccion: 'Carrer de Mallorca, 401, 08013 Barcelona, España',
      title: 'Posicion 1',
      descripcion: 'Cerca de la Sagrada Familia',
      posicion: {
        lat: 41.4036299,
        lng: 2.1743558
      }
    },
    {
      direccion: 'La Rambla, 91, 08002 Barcelona, España',
      title: 'Posicion 2',
      descripcion: 'Cerca del Mercado de La Boqueria',
      posicion: {
        lat: 41.3825648,
        lng: 2.1722458
      }
    },
    {
      direccion: 'Passeig de Gràcia, 43, 08007 Barcelona, España',
      title: 'Posicion 3',
      descripcion: 'Cerca de la Casa Batlló',
      posicion: {
        lat: 41.3916407,
        lng: 2.1651224
      }
    },
    {
      direccion: 'Parc Güell, 08024 Barcelona, España',
      title: 'Posicion 4',
      descripcion: 'Parque Güell',
      posicion: {
        lat: 41.4144949,
        lng: 2.1526944
      }
    },
    {
      direccion: 'Avinguda Diagonal, 686, 08034 Barcelona, España',
      title: 'Posicion 5',
      descripcion: 'Cerca del Camp Nou',
      posicion: {
        lat: 41.3808961,
        lng: 2.1228208
      }
    }
  ];
  advancedMarkerElement!: google.maps.MarkerLibrary;

  showMap = false;

  constructor() {
    this.loadMarker();
  }

  async loadMarker() {
    this.advancedMarkerElement = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
    this.showMap = true;
  }

  openInfoWindow(marker: any, infoWindow: MapInfoWindow) {
    infoWindow.open(marker);
  }

  getPinElement() {
    const testPin = new this.advancedMarkerElement.PinElement({
      scale: 1.5,
      glyphColor: 'white',
    });
    return testPin.element;
  }

}
