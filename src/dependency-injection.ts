interface Store {
    name: string;
    profit: number;
    getProfit(): number;
}

class HiggStore implements Store {
    name: string = 'HiggStore';
    profit: number = 5000;
    getProfit(): number {
        return this.profit;
    }
}

class EinsteinStore implements Store {
    name: string = 'EinsteinStore';
    profit: number = 20000;
    getProfit(): number {
        return this.profit;
    }
}

class Keyboard {
    private store: Store;
    private name: string;
    private price: number;

    constructor(store: Store, name: string, price: number) {
        this.store = store;
        this.name = name;
        this.price = price;
    }

    getName(): string {
        return this.name;
    }

    sell(): number {
        return this.store.getProfit() + this.price;
    }
}

class Monitor {
    private store: Store;
    private name: string;
    private price: number;

    constructor(store: Store, name: string, price: number) {
        this.store = store;
        this.name = name;
        this.price = price;
    }

    getName(): string {
        return this.name;
    }

    sell(): number {
        return this.store.getProfit() + this.price;
    }
}

const keyboard = new Keyboard(new HiggStore(), 'Rexus Mecha Keyboard', 350000);
console.log(keyboard.sell()); // profit +5000

const monitor = new Monitor(new EinsteinStore(), 'LG FullHd', 1000000);
console.log(monitor.sell()); // profit +20000
