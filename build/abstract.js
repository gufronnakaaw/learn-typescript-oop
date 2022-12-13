"use strict";
class Tesla {
    constructor(type, year, price, color) {
        this.type = type;
        this.year = year;
        this.price = price;
        this.color = color;
    }
}
class ModelS extends Tesla {
    constructor(type, year, price, color) {
        super(type, year, price, color);
    }
    render() {
        return {
            type: this.type,
            year: this.year,
            price: this.price,
            color: this.color,
        };
    }
    run() {
        console.log(`brum brum brum ${this.type}`);
    }
}
class Model3 extends Tesla {
    constructor(type, year, price, color) {
        super(type, year, price, color);
    }
    render() {
        return {
            type: this.type,
            year: this.year,
            price: this.price,
            color: this.color,
        };
    }
    run() {
        console.log(`brum brum brum ${this.type}`);
    }
}
const models = new ModelS('Tesla Model S', 2012, 'Rp2.200.000.000', 'Midnight Silver Metallic');
console.log(models.render());
const model3 = new ModelS('Tesla Model 3', 2017, 'Rp1.500.000.000', 'Deep Blue');
console.log(model3.render());
// console.log(model3.run());
