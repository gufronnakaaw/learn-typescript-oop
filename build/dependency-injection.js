"use strict";
class HiggStore {
    constructor() {
        this.name = 'HiggStore';
        this.profit = 5000;
    }
    getProfit() {
        return this.profit;
    }
}
class EinsteinStore {
    constructor() {
        this.name = 'EinsteinStore';
        this.profit = 20000;
    }
    getProfit() {
        return this.profit;
    }
}
class Keyboard {
    constructor(store, name, price) {
        this.store = store;
        this.name = name;
        this.price = price;
    }
    getName() {
        return this.name;
    }
    sell() {
        return this.store.getProfit() + this.price;
    }
}
class Monitor {
    constructor(store, name, price) {
        this.store = store;
        this.name = name;
        this.price = price;
    }
    getName() {
        return this.name;
    }
    sell() {
        return this.store.getProfit() + this.price;
    }
}
const keyboard = new Keyboard(new HiggStore(), 'Rexus Mecha Keyboard', 350000);
console.log(keyboard.sell()); // profit +5000
const monitor = new Monitor(new EinsteinStore(), 'LG FullHd', 1000000);
console.log(monitor.sell()); // profit +20000
