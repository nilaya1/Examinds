import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations" 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { DiscussComponent } from './discuss/discuss.component';
import { TestboardComponent } from './testboard/testboard.component';
import { AfterExamInstructionsComponent } from './after-exam-instructions/after-exam-instructions.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestComponent,
    NavComponent,
    HomeComponent,
    DiscussComponent,
    TestboardComponent,
    AfterExamInstructionsComponent
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
