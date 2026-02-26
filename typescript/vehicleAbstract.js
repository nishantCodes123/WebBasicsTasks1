"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Vehicle Management using Abstract Class
class Vehicle {
    brand;
    price;
    model;
    constructor(brand, price, model) {
        this.brand = brand;
        this.price = price;
        this.model = model;
    }
}
class BMW extends Vehicle {
    drive() {
        console.log("DU DU DU MAX VERSATPPEN");
    }
    constructor(brand, price, model) {
        super(brand, price, model);
    }
}
let car = new BMW("BMW", 1000000000, "M5");
console.log(car.brand);
//# sourceMappingURL=vehicleAbstract.js.map