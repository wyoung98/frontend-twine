import { User } from "./user.model";
export class Goal {
    id :number;
    user: User;
    goal: number;
    startDate: Date;
    endDate: Date;

    constructor(id : number, goal: number, startDate: Date, endDate:Date, user:User){
        this.id = id;
        this.goal = goal;
        this.startDate = startDate;
        this.endDate=endDate;
        this.user=user;
    }
}
