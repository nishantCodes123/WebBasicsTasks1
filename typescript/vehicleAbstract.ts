//Vehicle Management using Abstract Class
abstract class Vehicle{
    brand:string;
    price:number;
    model:string;

    constructor(brand:string, price:number, model:string){
        this.brand=brand;
        this.price=price;
        this.model=model;
    }

    abstract drive():void;
}

class BMW extends Vehicle{
    drive(){
        console.log("DU DU DU MAX VERSATPPEN");
    }
    constructor(brand:string,
    price:number,
    model:string,){
       super(brand,price,model);

    }

}
let car=new BMW("BMW",1000000000,"M5");

console.log(car.brand);
