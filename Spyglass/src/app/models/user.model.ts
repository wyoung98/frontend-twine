export class User {
    id:number;
    name:string;
    birthdate: Date;

    constructor(id:number, name:string, birthdate:Date){
        this.id =id;
        this.name= name;
        this.birthdate=birthdate;
    }

}
