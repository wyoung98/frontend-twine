import { Component, OnInit } from '@angular/core';
import { Goal } from '../models/goal.model';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-edit-goal',
  templateUrl: './edit-goal.component.html',
  styleUrls: ['./edit-goal.component.css']
})
export class EditGoalComponent implements OnInit {
  goal:Goal = new Goal();

  constructor() { }

  ngOnInit(): void {
  }

}
