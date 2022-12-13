namespace NamespaceTesting {
    // works!
    class Users {}

    // works!
    export class Products {}
}

// access class
const products = new NamespaceTesting.Products();

// not works!
// class Users {

// }
