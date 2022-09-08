import { User } from "./user.model";
export class Goal {
    id :number;
    image: string;
    description: string;
    name :string;
    user: User;
    currentsavings:number;
    finalsavings: number;
    endDate: Date;

    constructor(id : number = 1, name: string ='Retirement',currentsavings:number = 0, goal: number = 20000,endDate:Date = new Date(), user:User = new User(), description:string = 'The description', image:string=''){
        this.id = id;
        this.name = name;
        this.image =image;
        this.description=description;
        this.endDate=endDate;
        this.user=user;
        this.currentsavings = currentsavings;
        this.finalsavings = goal;
    }
}
