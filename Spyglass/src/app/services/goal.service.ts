import { Injectable } from '@angular/core';
import { Goal } from '../models/goal.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GoalService {
  goals: Goal[]=[];
  url: string = '';
  constructor(private http: HttpClient) { }


  getAllGoals():Observable<HttpResponse<Goal[]>>{
    return this.http.get<Goal[]>(this.url,{observe:'response'})
  }

  getGoalByID(goalID:number): Observable<HttpResponse<Goal>>{
    return this.http.get<Goal>(this.url+'/'+goalID,{observe:'response'})
  }

  createGoal(goal:Goal){
    this.http.post(this.url, goal)
  }

  updateGoal(goal:Goal){
    this.http.put(this.url, goal)
  }

  deleteGoal(goalID:number){
    this.http.delete(this.url)
  }
}
