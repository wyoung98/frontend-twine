import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import { EditGoalComponent } from './edit-goal/edit-goal.component';
import { CreateGoalComponent } from './create-goal/create-goal.component';
import {TabViewModule} from 'primeng/tabview'
import {CalendarModule} from 'primeng/calendar'
import {InputNumberModule} from 'primeng/inputnumber'
import {InputTextareaModule} from 'primeng/inputtextarea'
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {TableModule} from 'primeng/table'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    LoginComponent,
    EditGoalComponent,
    CreateGoalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PasswordModule,
    InputTextModule,
    CardModule,
    TabViewModule,
    CalendarModule,
    InputNumberModule,
    InputTextareaModule,
    FormsModule,
    BrowserAnimationsModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
