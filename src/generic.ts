function template<T>(value: T) {
    return value;
}

const dataOne = template<string>('testing'); // string
const dataTwo = template<number>(1000); //  number

// generic interface
interface GenerictTest<T> {
    anyType: T;
}

function functionGenericTest<T>(value: T): GenerictTest<T> {
    return {
        anyType: value,
    };
}

const data1 = functionGenericTest<string>('testing');
const data2 = functionGenericTest<number>(2000);
const data3 = functionGenericTest<boolean>(true);
const data4 = functionGenericTest<Array<string>>(['testing', 'unknown']);
// console.log(data4);

// generic types
type GenericTypes<T> = T;

function functionGenericTypeTest<T>(param: T): GenericTypes<T> {
    return param;
}

// console.log(
//     functionGenericTypeTest<{ id: number; name: string }>({
//         id: 1,
//         name: 'unknown',
//     })
// );

interface GenerictInterface<T> {
    prop: T;
    method(): T;
}

class GenerictClass<T> implements GenerictInterface<T> {
    prop: T;

    constructor(prop: T) {
        this.prop = prop;
    }

    method(): T {
        return this.prop;
    }
}

const testingString = new GenerictClass<string>('testing string');
const testingNumber = new GenerictClass<number>(9090);
// console.log(testingString);

// generic class
class Ping {
    prop: string = 'ping';
}

class Pong<T> {
    pongProp: T;

    constructor(pongProp: T) {
        this.pongProp = pongProp;
    }
}

const pong = new Pong(new Ping());
// console.log(pong);

// generic constraint
interface Length {
    length: number;
}

function getLength<T extends Length>(prop: T): T {
    console.log(prop.length); // ga efektif karna cuma string aja
    return prop;
}

// console.log(getLength<string>('unknown'));

// generic class constraint
interface WomenProduct {
    sell(): void;
}

class Pashmina implements WomenProduct {
    sell(): void {
        console.log('pashmina sell');
    }
}

class Shawl implements WomenProduct {
    sell(): void {
        console.log('shawl sell');
    }
}

function sellWomenProduct<T extends WomenProduct>(products: T[]): void {
    products.forEach((product) => product.sell());
}

const pashmina = new Pashmina();
const shawl = new Shawl();

sellWomenProduct([pashmina, shawl]);

// type parameter in generics constraint
function getProperty<T, U extends keyof T>(prop: T, key: U): T[U] {
    return prop[key];
}

const x = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
};

// console.log(getProperty(x, 'a'));
