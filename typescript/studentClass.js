"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    name;
    id;
    standard;
    constructor(name, id, standard) {
        this.name = name;
        this.id = id;
        this.standard = standard;
    }
    greet() {
        return "Good Morning";
    }
}
let student1 = new Student("Chinmay", 67, 1);
console.log(student1.greet());
//# sourceMappingURL=studentClass.js.map