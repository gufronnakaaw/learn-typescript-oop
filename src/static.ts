interface Ferrari {
    type: string;
    year: number;
    price: string;
    color: string;
}

// static
class Ferrari {
    static type: string = 'Ferrari 488 Spider';
    static year: number = 2015;
    static price: string = 'Rp10.000.000.000';
    static color: string = 'Dark Gray';

    static render(): Ferrari {
        return {
            type: Ferrari.type,
            year: Ferrari.year,
            price: Ferrari.price,
            color: Ferrari.color,
        };
    }

    static async run(): Promise<string> {
        return 'brum brum brum';
    }
}

console.log(Ferrari.render());
