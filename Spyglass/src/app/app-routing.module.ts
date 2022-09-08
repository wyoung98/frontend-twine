import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGoalComponent } from './create-goal/create-goal.component';
import { EditGoalComponent } from './edit-goal/edit-goal.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent},
  {path:'edit-goal', component:EditGoalComponent},
  {path:'create-goal', component:CreateGoalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
