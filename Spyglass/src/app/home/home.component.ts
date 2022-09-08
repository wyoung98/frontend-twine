import { Component, OnInit } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { Goal } from '../models/goal.model';
import { User } from '../models/user.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  goals:Goal[] = [new Goal(), new Goal(), new Goal(), new Goal(), new Goal()];
  constructor() { }

  ngOnInit(): void {
  }

  
}
