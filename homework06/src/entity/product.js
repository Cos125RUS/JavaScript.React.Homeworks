/**
 * Продукт. Он же товар. Он же источник дохода.
 * Не знаю, что это, но, наверняка, какая-то бесполезная никому ненужная дрянь.
 */
class Product {
    constructor(name, description, price, available = true) {
        this.id = Math.floor(Math.random()*10000);
        this.name = name;
        this.description = description;
        this.price = price;
        this.available = available;
    }
}

export default Product;