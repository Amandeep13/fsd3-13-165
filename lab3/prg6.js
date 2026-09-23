import http from "http";

import {
  getAllProducts,
  addProduct,
  deleteProduct,
  getProductById,
  updateProduct,
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
        data,
      })
    );
  }


  // ADD PRODUCT
  else if (req.url === "/api/v1/products" && req.method === "POST") {

    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {

      const product = JSON.parse(body);

      const item = addProduct(product);

      res.statusCode = 201;

      res.setHeader("content-type", "application/json");

      res.end(
        JSON.stringify({
          msg: "product added",
          data: item,
        })
      );
    });
  }


  // UPDATE PRODUCT
  else if (
    req.url.startsWith("/api/v1/products/") &&
    req.method === "PUT"
  ) {

    const productID = Number(req.url.split("/").pop());

    console.log("Update Product id:", productID);

    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {

      const product = JSON.parse(body);

      product.id = productID;

      const updatedPrd = updateProduct(productID, product);

      if (!updatedPrd) {

        res.statusCode = 404;

        res.end(
          JSON.stringify({
            msg: `id ${productID} not found`,
          })
        );

      } else {

        res.statusCode = 200;

        res.end(
          JSON.stringify({
            msg: "product updated",
            updatedPrd,
          })
        );
      }
    });
  }


  // DELETE PRODUCT
  else if (
    req.url.startsWith("/api/v1/products/") &&
    req.method === "DELETE"
  ) {

    const pid = Number(req.url.split("/").pop());

    if (deleteProduct(pid)) {

      res.statusCode = 200;

      res.end(
        JSON.stringify({
          msg: "item deleted",
        })
      );

    } else {

      res.statusCode = 404;

      res.end(
        JSON.stringify({
          msg: `product with id ${pid} not found`,
        })
      );
    }
  }


  // GET PRODUCT BY ID
  else if (
    req.url.startsWith("/api/v1/products/") &&
    req.method === "GET"
  ) {

    const pid = Number(req.url.split("/").pop());

    const product = getProductById(pid);

    if (product) {

      res.statusCode = 200;

      res.end(
        JSON.stringify({
          data: product,
        })
      );

    } else {

      res.statusCode = 404;

      res.end(
        JSON.stringify({
          msg: `product with id ${pid} not found`,
        })
      );
    }
  }


  // INVALID REQUEST
  else {

    res.statusCode = 404;

    res.end("request not found");
  }
});

server.listen(5000, () => {
  console.log("prg6 is running");
});