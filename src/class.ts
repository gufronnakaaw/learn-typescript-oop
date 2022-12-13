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
    constructor(
        protected name: string,
        protected color: string,
        protected price: number
    ) {}

    getPrice(): number {
        return this.price;
    }
}

class Mercedes extends Car {
    private logo: string;

    constructor(name: string, color: string, logo: string, price: number) {
        super(name, color, price);
        this.logo = logo;
    }

    getName(): string {
        return this.name;
    }

    getColor(): string {
        return this.color;
    }

    getLogo(): string {
        return this.logo;
    }

    // belum terpakai
    getPriceInRupiah(): string {
        super.getPrice();
        return `Rp.${this.price}`;
    }

    render(): { name: string; color: string; logo: string; price: string } {
        return {
            name: this.getName(), // from parent class
            color: this.getColor(), // from parent class
            logo: this.getLogo(), // from this class
            price: this.getPriceInRupiah(), // from this class
        };
    }
}

const mercy = new Mercedes('mercy', 'black', 'mercedes_logo', 14000);
console.log(mercy.render());
