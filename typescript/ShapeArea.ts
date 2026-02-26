abstract class Shape {
    abstract area(): number;
}

class Circle extends Shape {

    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area(): number {
        return Math.PI*this.radius*this.radius;
    }
}
let circle1= new Circle(10);
console.log(circle1.area());
