import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscussComponent } from './discuss/discuss.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"discuss", component:DiscussComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
