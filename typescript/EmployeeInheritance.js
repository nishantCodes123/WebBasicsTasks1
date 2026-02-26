"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Manager {
    name;
    department;
    id;
    constructor(name, department, id) {
        this.name = name;
        this.department = department;
        this.id = id;
    }
    assignTask() {
        return "do this work";
    }
}
class Employee extends Manager {
    role;
    constructor(name, department, id, role) {
        super(name, department, id);
        this.role = role;
    }
}
let emp1 = new Employee("Lannister", "finance", 9999, "junior");
console.log(emp1.assignTask());
//# sourceMappingURL=EmployeeInheritance.js.map