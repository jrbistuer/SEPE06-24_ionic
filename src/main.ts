import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp({"projectId":"testcifo03","appId":"1:263353068362:web:d1f54752bf07d9b3816fb3","storageBucket":"testcifo03.appspot.com","apiKey":"AIzaSyAX4VfJLZf7oaIrI9YF46g5Wlq0WktH-xQ","authDomain":"testcifo03.firebaseapp.com","messagingSenderId":"263353068362","measurementId":"G-R5GS6Y0700"})), 
    provideAuth(() => getAuth()), 
    provideFirestore(() => getFirestore())
  ],
});
