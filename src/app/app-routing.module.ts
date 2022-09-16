import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestboardComponent } from './testboard/testboard.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"testboard", component:TestboardComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
