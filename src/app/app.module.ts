import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AngularFireModule} from 'angularfire2';


import { AppComponent } from './app.component';


// Must export the config
export const firebaseConfig = {
     apiKey: "AIzaSyCKr7yul3wgJfUy1BdZNnGqjp034b8xYvE",
    authDomain: "bizzctacts.firebaseapp.com",
    databaseURL: "https://bizzctacts.firebaseio.com",
    storageBucket: "bizzctacts.appspot.com"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
