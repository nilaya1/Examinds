import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations" 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { DiscussComponent } from './discuss/discuss.component';
=======
import { TestboardComponent } from './testboard/testboard.component';
>>>>>>> 315441b8b0c53a674df8ea912fccb47171c4a21e

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
<<<<<<< HEAD
    DiscussComponent
=======
    TestboardComponent
>>>>>>> 315441b8b0c53a674df8ea912fccb47171c4a21e
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
