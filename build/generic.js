"use strict";
function template(value) {
    return value;
}
const dataOne = template('testing'); // string
const dataTwo = template(1000); //  number
function functionGenericTest(value) {
    return {
        anyType: value,
    };
}
const data1 = functionGenericTest('testing');
const data2 = functionGenericTest(2000);
const data3 = functionGenericTest(true);
const data4 = functionGenericTest(['testing', 'unknown']);
function functionGenericTypeTest(param) {
    return param;
}
class GenerictClass {
    constructor(prop) {
        this.prop = prop;
    }
    method() {
        return this.prop;
    }
}
const testingString = new GenerictClass('testing string');
const testingNumber = new GenerictClass(9090);
// console.log(testingString);
// generic class
class Ping {
    constructor() {
        this.prop = 'ping';
    }
}
class Pong {
    constructor(pongProp) {
        this.pongProp = pongProp;
    }
}
const pong = new Pong(new Ping());
function getLength(prop) {
    console.log(prop.length); // ga efektif karna cuma string aja
    return prop;
}
class Pashmina {
    sell() {
        console.log('pashmina sell');
    }
}
class Shawl {
    sell() {
        console.log('shawl sell');
    }
}
function sellWomenProduct(products) {
    products.forEach((product) => product.sell());
}
const pashmina = new Pashmina();
const shawl = new Shawl();
sellWomenProduct([pashmina, shawl]);
// type parameter in generics constraint
function getProperty(prop, key) {
    return prop[key];
}
const x = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
};
// console.log(getProperty(x, 'a'));
