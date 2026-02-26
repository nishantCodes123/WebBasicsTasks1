class Student {
    name:string;
    id:number;
    standard:number;

    constructor (name:string, id:number, standard:number){
        this.name=name;
        this.id=id;
        this.standard=standard;
    }

    greet(){
        return "Good Morning";
    }
}

let student1 = new Student("Chinmay", 67, 1);
console.log(student1.greet());


