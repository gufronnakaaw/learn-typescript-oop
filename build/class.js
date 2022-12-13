"use strict";
// class
// class Animal {
//     private name: string;
//     private color: string;
//     static from: string;
//     constructor(name: string, color: string, from: string) {
//         this.name = name;
//         this.color = color;
//         Animal.from = from;
//     }
//     render(): void {
//         console.log(`hello ${this.name}, your color is ${this.color}`);
//     }
// }
// const lion = new Animal('lion', 'orange', 'indonesia');
// console.log(typeof lion);
// console.log(typeof Animal);
// console.log(Animal);
class Car {
    constructor(name, color, price) {
        this.name = name;
        this.color = color;
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
}
class Mercedes extends Car {
    constructor(name, color, logo, price) {
        super(name, color, price);
        this.logo = logo;
    }
    getName() {
        return this.name;
    }
    getColor() {
        return this.color;
    }
    getLogo() {
        return this.logo;
    }
    // belum terpakai
    getPriceInRupiah() {
        super.getPrice();
        return `Rp.${this.price}`;
    }
    render() {
        return {
            name: this.getName(),
            color: this.getColor(),
            logo: this.getLogo(),
            price: this.getPriceInRupiah(), // from this class
        };
    }
}
const mercy = new Mercedes('mercy', 'black', 'mercedes_logo', 14000);
console.log(mercy.render());
