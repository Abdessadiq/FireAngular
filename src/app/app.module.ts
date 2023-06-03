import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';

import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAs_s_N7X6bAgnOnp1ROlDFlFt7ItaMdY4",
  authDomain: "ionic-5526b.firebaseapp.com",
  projectId: "ionic-5526b",
  storageBucket: "ionic-5526b.appspot.com",
  messagingSenderId: "951013538912",
  appId: "1:951013538912:web:990a27016bd60463869705",
  measurementId: "G-NR3ML304ET"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
// export const  firebaseConfig ={
//   apiKey:'',
//   authDomain:'*****.firebaseapp.com',
//   databaseURL:'https//************.forebaseio.com',
//   projectId:'',
//   storageBucket:'',
//   messagingSenderId:'',
//   appId:'',
//
// };
