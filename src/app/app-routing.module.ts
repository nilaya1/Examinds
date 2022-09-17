import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestComponent } from './login/login.component';
import { DiscussComponent } from './discuss/discuss.component';
import { HomeComponent } from './home/home.component';
import { TestboardComponent } from './testboard/testboard.component';
const routes: Routes = [
  {path:'login', component:RequestComponent},
  {path:"", component:HomeComponent},
  {path:"discuss", component:DiscussComponent},
  {path:"testboard", component:TestboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


