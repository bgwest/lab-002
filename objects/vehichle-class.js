'use strict';
class Vehichle {
    constructor(name, wheels) {
        this.name = name;
        this. wheels = wheels;
    };
    drive() {
        return 'Moving Forward';
    }

    stop() {
        return 'Stopping';
    }
};

class Car extends Vehichle {
    constructor(name){
        super(name, 4);
    }
};

class Motorcycle extends Vehichle {
    constructor(name){
        super(name, 2);
    }
    wheelie() {
        return 'Wheee!';
    };
}
// module.exports = {Vehichle};
// module.exports = {Car};
// module.exports = {Motorcycle};
module.exports = {Car, Motorcycle};