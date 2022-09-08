export class User {
    id:number;
    name:string;
    birthdate: Date;

    constructor(id:number = 1, name:string = 'Wesley Young', birthdate:Date = new Date()){
        this.id =id;
        this.name= name;
        this.birthdate=birthdate;
    }

}
