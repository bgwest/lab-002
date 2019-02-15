'use strict';
class Vehicle {
    constructor(name, wheels) {
        this.name = name;
        this. wheels = wheels;
    };
};

class Car extends Vehichle {
    constructor(name, wheels){
        super(name, wheels);
    }
};

class Motorcycle extends Vehichle {
    constructor(name, wheels){
        super(name, wheels);
    }
}
module.exports = Vehicle;
module.exports = Car;
module.exports = Motorcycle;
