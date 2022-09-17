import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations" 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { RequestComponent } from './login/login.component';
=======
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { DiscussComponent } from './discuss/discuss.component';
=======
import { TestboardComponent } from './testboard/testboard.component';
>>>>>>> 315441b8b0c53a674df8ea912fccb47171c4a21e
>>>>>>> ca2a8bb03f7b2b45e6bf652c3ecc5c3bd5b96dd0

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    RequestComponent
=======
    NavComponent,
    HomeComponent,
<<<<<<< HEAD
    DiscussComponent
=======
    TestboardComponent
>>>>>>> 315441b8b0c53a674df8ea912fccb47171c4a21e
>>>>>>> ca2a8bb03f7b2b45e6bf652c3ecc5c3bd5b96dd0
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
