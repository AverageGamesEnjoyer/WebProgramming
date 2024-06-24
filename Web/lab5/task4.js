const products = new Map();
const orders = new Set();
const productHistory = new WeakMap();
const productUpdates = new WeakSet();
let lastProductId = 0;

function addProduct() {
    const name = prompt("Назва продукту:");
    const price = parseInt(prompt("Ціна продукту:"));
    const quantity = parseInt(prompt("Кількість на складі:"));

    if (!name || isNaN(price) || isNaN(quantity)) {
        console.log("Некоректно введені дані");
        return;
    }

    const product = {
    id: lastProductId + 1,
    name,
    price,
    quantity
    };
    lastProductId++;
    products.set(product.id, product);
    productHistory.set(product, [{ price, quantity }]);
}


function deleteProduct() {
    const id = parseInt(prompt("ID продукту для видалення:"));
    if (products.has(id)) {
        const product = products.get(id);
        productUpdates.delete(product);
        products.delete(id);
        console.log(`Продукт видалено.`);
    } else {
        console.log(`Продукт не знайдено.`);
    }
}

function updateProduct() {
    const id = parseInt(prompt("ID продукту для оновлення:"));
    const product = products.get(id);
    if (!product) {
        console.log("Продукт не знайдено.");
        return;
    }

    const newPrice = prompt("Нова ціна продукту:", product.price.toString());
    const newQuantity = prompt("Нова кількість на складі:", product.quantity.toString());

    if (newPrice !== "") {
        product.price = parseFloat(newPrice);
    }

    if (newQuantity !== "") {
        product.quantity = parseInt(newQuantity);
    }

    const history = productHistory.get(product);
    history.push({ price: product.price, quantity: product.quantity });
    productHistory.set(product, history);
    productUpdates.add(product);
}


function searchProduct() {
    const name = prompt("Назва продукту для пошуку:");
    let found = false;

    products.forEach(product => {
        if (product.name.includes(name)) {
            console.log(`Знайдено продукт: ${JSON.stringify(product)}`);
            found = true;
        }
    });

    if (!found) {
        console.log(`Продукт не знайдено.`);
    }
}


function doOrder() {
    const id = parseInt(prompt("ID продукту для замовлення:"));
    const quantity = parseInt(prompt("Кількість для замовлення:"));
    const product = products.get(id);

    if (!product) {
        console.log("Продукт не знайдено.");
        return;
    }

    if (quantity > product.quantity) {
        console.log(`Недостатньо товару. Доступно: ${product.quantity}`);
        return;
    }

    product.quantity = product.quantity - quantity;
    orders.add({ productId: id, quantity });

    console.log(`Замовлення оформлено: ID продукту: ${id}, к-сть=${quantity}`);
    console.log(`Залишок на складі: ${product.name} - ${product.quantity}`);
}


function productsList() {
    console.log("Список продуктів:");
    products.forEach((product, productId) => {
        console.log(`ID: ${productId}, назва: ${product.name}, ціна=${product.price}, к-сть=${product.quantity}`);
    });
}


function printProductUpdates() {
    products.forEach((product) => {
        if (productUpdates.has(product)) {
            console.log("Історія замовлень:");
            console.log(`Продукт ${product.name} було оновлено. Ціна=${product.price}, к-сть=${product.quantity}`);
        }
    });
}

document.getElementById("addProduct").addEventListener("click", addProduct);
document.getElementById("deleteProduct").addEventListener("click", deleteProduct);
document.getElementById("updateProduct").addEventListener("click", updateProduct);
document.getElementById("searchProduct").addEventListener("click", searchProduct);
document.getElementById("doOrder").addEventListener("click", doOrder);
document.getElementById("productsList").addEventListener("click", productsList);
document.getElementById("printProductUpdates").addEventListener("click", printProductUpdates);