"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
let circle1 = new Circle(10);
console.log(circle1.area());
//# sourceMappingURL=ShapeArea.js.map