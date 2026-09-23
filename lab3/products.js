const products = [
    { id: 1, name: "sam", qty: 100, price: 1000 },
    { id: 2, name: "ram", qty: 10, price: 1000 }
];

let nextId = 3;

export const getAllProducts = () => {
    return products;
};

export const addProduct = (item) => {
    item.id = nextId;
    nextId++;

    products.push(item);

    return item;
};

export const deleteProduct = (pid) => {
    const item = products.findIndex((prd) => prd.id === pid);

    if (item == -1)
        return false;

    products.splice(item, 1);

    console.log("products remaining:", products);

    return true;
};