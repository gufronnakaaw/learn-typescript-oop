class Product {
    private _productName: string;

    constructor(productName: string) {
        this._productName = productName;
    }

    get getProductName(): string {
        return this._productName;
    }

    set setProductName(productName: string) {
        this._productName = productName;
    }
}

const indomie = new Product('indomie goreng');
indomie.setProductName = 'indomie rebus kari ayam'; // set
console.log(indomie.getProductName); // get
