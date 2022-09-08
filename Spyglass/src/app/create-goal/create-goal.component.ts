import { Component, OnInit } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { Goal } from '../models/goal.model';

@Component({
  selector: 'app-create-goal',
  templateUrl: './create-goal.component.html',
  styleUrls: ['./create-goal.component.css']
})
export class CreateGoalComponent implements OnInit {

  goal:Goal = new Goal();
  constructor() { }

  ngOnInit(): void {
  }

}
