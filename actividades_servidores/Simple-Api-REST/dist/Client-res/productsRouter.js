"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const IProductReposirotyImpIArrays_1 = __importDefault(require("../Source Packages/co.unicauca.products.access/IProductReposirotyImpIArrays"));
const Product_1 = __importDefault(require("../Source Packages/co.unicauca.products.domain.entity/Product"));
let expressRef = require('express');
/**
 *
 *
 *
 */
//Configuracion de conexiones
const initialize = new IProductReposirotyImpIArrays_1.default();
//router
const productsRouter = expressRef.Router();
// middleware that is specific to this router
productsRouter.use((req, res, next) => {
    req.next();
});
/**
 * @GET
 * @brief FIND ALL base path from products
 */
productsRouter.get('/products', (req, res) => {
    let resource;
    try {
        resource = initialize.findAll();
    }
    catch (e) {
        res.send(e);
    }
    res.send(resource);
});
/**
 * @GET
 * @brief FIND Product by id request
 */
productsRouter.get(`/products/:id`, (req, res) => {
    let response;
    const id = req.params.id;
    try {
        response = initialize.findById(id);
        console.log(response);
    }
    catch (e) {
        res.send(e);
    }
    res.send(response);
});
/**
 * @POST
 * @brief create Product by id request
 */
productsRouter.post(`/products`, (req, res) => {
    let response;
    try {
        console.log("CREAR PRODUCTO");
        response = initialize.create(new Product_1.default(1, "Tv samsung", 200000));
        console.log(initialize.size());
    }
    catch (e) {
        res.send(e);
    }
    res.send(response);
});
/**
 * @DELETE
 * @brief Delete product by id request
 */
productsRouter.delete(`/products/:id`, (req, res) => {
    let response;
    const id = req.params.id;
    try {
        response = initialize.delete(id);
    }
    catch (e) {
        res.send(e);
    }
    res.send(response);
});
/**
 * @PUT
 * @brief Update product by id request
 */
productsRouter.put(`/products`, (req, res) => {
    let response;
    try {
        response = initialize.update(new Product_1.default(1, "Monitor Odissen Samsung", 200000));
    }
    catch (e) {
        res.send(e);
    }
    res.send(response);
});
/**
 *
 *
 */
exports.default = productsRouter;
