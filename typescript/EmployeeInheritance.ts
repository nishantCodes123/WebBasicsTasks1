class Manager{
    name:string;
    department:string;
    id:number;

    constructor(name:string, department:string, id:number){
        this.name=name;
        this.department=department;
        this.id=id;

    }
    assignTask(){
        return "do this work";
    }
}

class Employee extends Manager{
    role:string;

    constructor(name:string, department:string, id:number, role:string){ 
        super(name, department, id);
        this.role=role;
        
    }
}

let emp1 = new Employee("Lannister", "finance", 9999, "junior");
console.log(emp1.assignTask());
