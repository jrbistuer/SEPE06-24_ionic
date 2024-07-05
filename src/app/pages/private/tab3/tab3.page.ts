/// <reference types="@types/google.maps" />
import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonContent, HeaderComponent],
})
export class Tab3Page {

  title = "Tab 3 Sample";
 
  constructor() {}

  ionViewWillEnter() {
    this.initMap();
  }

  async initMap() {

    const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

    const coordinates = await Geolocation.getCurrentPosition();

    const location = new google.maps.LatLng(coordinates.coords.latitude, coordinates.coords.longitude);
  
    const map = new Map(
      document.getElementById("map") as HTMLElement,
      {
        center: location,
        zoom: 11,
        mapId: 'mimapa'
      }
    );

    const marker = new AdvancedMarkerElement({
        map,
        position: location,
    });

    const properties = [
      {
        direccion: 'Carrer de Mallorca, 401, 08013 Barcelona, España',
        title: 'Posicion',
        descripcion: 'Cerca de la Sagrada Familia',
        posicion: {
          lat: 41.4036299,
          lng: 2.1743558
        }
      },
      {
        direccion: 'La Rambla, 91, 08002 Barcelona, España',
        title: 'Posicion',
        descripcion: 'Cerca del Mercado de La Boqueria',
        posicion: {
          lat: 41.3825648,
          lng: 2.1722458
        }
      },
      {
        direccion: 'Passeig de Gràcia, 43, 08007 Barcelona, España',
        title: 'Posicion',
        descripcion: 'Cerca de la Casa Batlló',
        posicion: {
          lat: 41.3916407,
          lng: 2.1651224
        }
      },
      {
        direccion: 'Parc Güell, 08024 Barcelona, España',
        title: 'Posicion',
        descripcion: 'Parque Güell',
        posicion: {
          lat: 41.4144949,
          lng: 2.1526944
        }
      },
      {
        direccion: 'Avinguda Diagonal, 686, 08034 Barcelona, España',
        title: 'Posicion',
        descripcion: 'Cerca del Camp Nou',
        posicion: {
          lat: 41.3808961,
          lng: 2.1228208
        }
      }
    ];

    for (const property of properties) {
      const advancedMarkerElement = new AdvancedMarkerElement({
        map,
        content: this.buildContent(property),
        position: property.posicion,
        title: property.title,
      });
  
      advancedMarkerElement.addListener("click", () => {
        console.log('test');
        this.toggleHighlight(advancedMarkerElement, property);
      });
    }
  
  
  }

  buildContent(property: any) {
    const content = document.createElement("div");
    content.classList.add("property");
    content.innerHTML = `
      <div class="icon">
          <span class="fa-sr-only">${property.title}</span>
      </div>
      <div class="details">
          <div class="address">${property.direccion}</div>
          <div class="features">
          <div>
              <i aria-hidden="true" class="fa fa-bed fa-lg bed" title="bedroom"></i>
              <span class="fa-sr-only">bedroom</span>
              <span>test</span>
          </div>
          <div>
              <i aria-hidden="true" class="fa fa-bath fa-lg bath" title="bathroom"></i>
              <span class="fa-sr-only">bathroom</span>
              <span>test</span>
          </div>
          <div>
              <i aria-hidden="true" class="fa fa-ruler fa-lg size" title="size"></i>
              <span class="fa-sr-only">size</span>
              <span>test</span>
          </div>
          </div>
      </div>
      `;
    return content;
  }
  

  toggleHighlight(markerView: any, property: any) {
    if (markerView.content.classList.contains("highlight")) {
          markerView.content.classList.remove("highlight");
          markerView.zIndex = null;
    } else {
          markerView.content.classList.add("highlight");
          markerView.zIndex = 1;
    }
  }
    
}
