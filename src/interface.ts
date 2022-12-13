interface AndroidPhone {
    name: string;
    menu(): void;
    home(): void;
    back(): void;
}

class Xiaomi implements AndroidPhone {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    menu(): void {
        console.log('MENU XIAOMI');
    }

    home(): void {
        console.log('HOME XIAOMI');
    }

    back(): void {
        console.log('BACK XIAOMI');
    }
}

// const xiaomi = new Xiaomi('Xiaomi Redmi 10 Pro');
// console.log(xiaomi.home());

class Samsung implements AndroidPhone {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    menu(): void {
        console.log('MENU SAMSUNG');
    }

    home(): void {
        console.log('HOME SAMSUNG');
    }

    back(): void {
        console.log('BACK SAMSUNG');
    }
}

// const samsung = new Samsung('Samsung Galaxy S22');
// console.log(samsung.home());

class Game {
    private phone: AndroidPhone;

    constructor(phone: AndroidPhone) {
        this.phone = phone;
    }

    back(): void {
        console.log('back to game');
    }

    menu(): void {
        this.phone.menu();
    }

    home(): void {
        this.phone.home();
    }
}

const samsung = new Samsung('Samsung Galaxy S22');
const game = new Game(samsung);
// game.back();
// game.menu();
// game.home();

// optional property
interface Teacher {
    name: string;
    age: number;
    phoneNumber?: string;
}

let teacher: Teacher = {
    name: 'unknown',
    age: 25,
    phoneNumber: '081234567898',
};

// console.log(teacher.age);

// readonly
interface Student {
    readonly name: string;
    readonly age: number;
}

let student: Student = {
    name: 'unknown',
    age: 20,
};

// student.name = 'testing' // cannot reassign

// console.log(student.age);

// interface inheritance
interface Vehicle {
    name: string;
    wheels: number;
}

interface ICar extends Vehicle {
    doors: number;
}

class Honda implements ICar {
    name: string = 'Honda Civic';
    wheels: number = 4;
    doors: number = 4;
}

// interface extends class
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

interface SharkInterface extends Animal {
    swim(): void;
}

class Shark implements SharkInterface {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    swim(): void {
        console.log('swim in the ocean..');
    }
}
