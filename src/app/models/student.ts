export class Student
{
    sid:number;
    sname:string;
    scity:string;

    constructor(sid:number,sname:string,scity:string)
    {
        this.sid= sid;
        this.sname = sname;
        this.scity = scity;
    }

    getStudnetInfo():string
    {
        return "student name is "+this.sname+" id is "+this.sid+" city is "+this.scity;
        //return `Student Name is ${this.sid} ${}`
    }
}