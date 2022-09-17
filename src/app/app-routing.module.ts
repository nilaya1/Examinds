import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscussComponent } from './discuss/discuss.component';
import { HomeComponent } from './home/home.component';
import { TestboardComponent } from './testboard/testboard.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
<<<<<<< HEAD
  {path:"discuss", component:DiscussComponent}
=======
  {path:"testboard", component:TestboardComponent}
>>>>>>> 315441b8b0c53a674df8ea912fccb47171c4a21e
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
