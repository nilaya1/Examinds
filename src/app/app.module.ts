import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { DiscussComponent } from './discuss/discuss.component';
import { TestboardComponent } from './testboard/testboard.component';
import { SolutionComponent } from './solution/solution.component';
import { SolNavComponent } from './sol-nav/sol-nav.component';
import { AfterExamInstructionsComponent } from './after-exam-instructions/after-exam-instructions.component';

@NgModule({
  declarations: [AppComponent, 
    RequestComponent,
    NavComponent,
    FormsModule,
    HomeComponent,
    DiscussComponent,
    TestboardComponent,
    SolutionComponent,
    SolNavComponent,
    AfterExamInstructionsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
