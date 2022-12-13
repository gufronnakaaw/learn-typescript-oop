"use strict";
// static
class Ferrari {
    static render() {
        return {
            type: Ferrari.type,
            year: Ferrari.year,
            price: Ferrari.price,
            color: Ferrari.color,
        };
    }
    static async run() {
        return 'brum brum brum';
    }
}
Ferrari.type = 'Ferrari 488 Spider';
Ferrari.year = 2015;
Ferrari.price = 'Rp10.000.000.000';
Ferrari.color = 'Dark Gray';
console.log(Ferrari.render());
