"use strict";
class Xiaomi {
    constructor(name) {
        this.name = name;
    }
    menu() {
        console.log('MENU XIAOMI');
    }
    home() {
        console.log('HOME XIAOMI');
    }
    back() {
        console.log('BACK XIAOMI');
    }
}
// const xiaomi = new Xiaomi('Xiaomi Redmi 10 Pro');
// console.log(xiaomi.home());
class Samsung {
    constructor(name) {
        this.name = name;
    }
    menu() {
        console.log('MENU SAMSUNG');
    }
    home() {
        console.log('HOME SAMSUNG');
    }
    back() {
        console.log('BACK SAMSUNG');
    }
}
// const samsung = new Samsung('Samsung Galaxy S22');
// console.log(samsung.home());
class Game {
    constructor(phone) {
        this.phone = phone;
    }
    back() {
        console.log('back to game');
    }
    menu() {
        this.phone.menu();
    }
    home() {
        this.phone.home();
    }
}
const samsung = new Samsung('Samsung Galaxy S22');
const game = new Game(samsung);
let teacher = {
    name: 'unknown',
    age: 25,
    phoneNumber: '081234567898',
};
let student = {
    name: 'unknown',
    age: 20,
};
class Honda {
    constructor() {
        this.name = 'Honda Civic';
        this.wheels = 4;
        this.doors = 4;
    }
}
// interface extends class
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Shark {
    constructor(name) {
        this.name = name;
    }
    swim() {
        console.log('swim in the ocean..');
    }
}
