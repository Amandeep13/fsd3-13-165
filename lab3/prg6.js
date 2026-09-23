import http from 'http';

import {
    getAllProducts,
    addProduct,
    deleteProduct
} from "./products.js";


const server = http.createServer((req, res) => {

    // GET ALL PRODUCTS
    if (req.url === "/api/v1/products" && req.method === "GET") {

        res.statusCode = 200;

        const data = getAllProducts();

        res.setHeader("content-type", "application/json");

        res.end(
            JSON.stringify({
                count: data.length,
                data
            })
        );

    }

    // ADD PRODUCT
    else if (req.url === "/api/v1/products" && req.method === "POST") {

        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {

            const product = JSON.parse(body);

            const item = addProduct(product);

            console.log("received product:", product);

            res.statusCode = 201;

            res.setHeader("content-type", "application/json");

            res.end(
                JSON.stringify({
                    msg: "product received",
                    data: item
                })
            );
        });

    }

    // DELETE PRODUCT
    else if (
        req.url.startsWith("/api/v1/products/") &&
        req.method === "DELETE"
    ) {

        const pid = Number(req.url.split("/").pop());

        console.log("Delete product id:", pid);

        const result = deleteProduct(pid);

        res.statusCode = 200;

        res.setHeader("content-type", "application/json");

        res.end(
            JSON.stringify({
                msg: "product deleted",
                data: result
            })
        );

    }

    // DELETE /
    else if (req.url === "/" && req.method === "DELETE") {

        res.statusCode = 200;

        res.end("Delete request");

    }

    // NOT FOUND
    else {

        res.statusCode = 404;

        res.end("request not found");
    }
});


server.listen(4444, () => {
    console.log("prg6 is running.....");
});
