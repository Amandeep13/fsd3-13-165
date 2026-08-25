import readline from "readline/promises";
import { writeFile, readFile } from "fs/promises";
import { stdin, stdout } from "process";

const FILE = "./lab2/products.json";
const savecart = async (cart) => {
    await writeFile(FILE, JSON.stringify(cart, null, 2));

};
const getcart = async () => {
    const data = await readFile(FILE, "utf-8");
    return JSON.parse(data);

}
const addtocart = async (item) => {
    const products = await getcart();
    const productsFound = products.find((p) =>p.id ===item.id);
    if(productFound){
        product.qty +=item.qty;
        console.log("product in cart quantity updated");
    }else{
        products.push(items);
        console.log("Product added successfully 👍")
    }
    products.push(item);
    await savecart(products);
}
const showcart = () => {
    console.log("show cart");
}
const updatecart = () => {
    console.log("cart updated");
}
const deletefromcart = () => {
    console.log("deleted from cart");
}

const main = async () => {
    const cin = readline.createInterface({ input: stdin, output: stdout });
    let choice;
    do {

        console.log("Welcome to Shopping cart 🛍️")
        console.log("1......Add to cart");
        console.log("2......Show cart"); 5
        console.log("3......Remove item");
        console.log("4......Update Quantity");
        console.log("5.......Checkout");
        choice = await cin.question("Enter your choice : ");

        switch (Number(choice)) {
            case 1:
                let data = await cin.question('Enter id , name ,price , qty :');
                let p = data.split(",");
                
                let q=p.map((item)=>item.trim()) ;
                let[id, name, price, qty] = q;
                console.log(id, name, price, qty);
                const product={
                    id: Number(id) ,
                    name,
                    price: Number(price) ,
                    qty: Number(qty) ,

                } ;
               // console.table(product) ;
                await addtocart(product) ;
                break;
            case 2:
                showcart();
                break;
            case 3:
                deletefromcart();
                break;
            case 4:
                updatecart();
                break;
            case 5:

                break;
            default:
                console.log("Invalid choice! try again 💥")

        }
        console.log("type of", typeof (choice))
    } while (choice !== "5");
    cin.close();


};
await main();