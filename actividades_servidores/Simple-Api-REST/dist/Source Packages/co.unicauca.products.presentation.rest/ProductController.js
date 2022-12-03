"use strict";
/**
 * API REST de los servicios web. Es muy simple por ahora, en otra versión se
 * hará una API más robusta. Son nuestros servicios web. La anotación @Path
 * indica la URL en la cual responderá los servicios. Esta anotación se puede

* poner a nivel de clase y método. En este ejemplo todos los servicios
 * comparten el mismo Path, la acción se hacer mediante la anotació GET
 * (consultar), POST (agregar), PUT (editar), DELETE (eliminar).
 *
 * @author Carlos David Mesa Martinez, Anderson Camilo Bonilla Belalcazar

 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProductService_1 = __importDefault(require("../co.unicauca.products.domain.service/ProductService"));
// @Stateless
// @Path("products")
class ProductController {
    constructor() {
        /**
         * Routing with expressJS
        */
        this.router = express_1.default.Router();
        /**
        * Se inyecta la única implementación que hay de ProductService
        */
        /**
         * @Inject
        */
        this.service = new ProductService_1.default();
    }
    ;
    ProductController() {
        this.service = new ProductService_1.default();
    }
    /*
    Su uso desde consola mediante client url:
    curl -X GET http://localhost:8080/Simple-API-REST/product-service/products/
    */
    /**
     * @GET
     * @Produces({ MediaType.APPLICATION_JSON })
     * @returns
     */
    findAll() {
        return this.service.findAll();
    }
    /*
    Su uso desde consola mediante client url:
    curl -X GET http://localhost:8080/Simple-API-REST/productservice/products/1
    */
    /**
     * @GET
     * @Path("{id}")
     * @Produces({ MediaType.APPLICATION_JSON })
    */
    //public findById(@PathParam("id") int id): Product {
    findById(id) {
        return this.service.findById(id);
    }
    /*
    Su uso desde consola mediante client url:
    curl -X POST \
    http://localhost:8080/Simple-API-REST/product-service/products/ \
    -H 'Content-Type: application/json' \
    -d '{
    "id":1,
    "name":"Nevera Lg",
    "price":6700000
    }'
    */
    /**
    * @POST
    * @Consumes({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON })
    */
    create(prod) {
        if (this.service.create(prod)) {
            return "{\"ok\":\"true\", \"mensaje\":\"Producto creado\",\"errores\":\"\"}";
        }
        else {
            return "{\"ok\":\"false\", \"mensaje\":\"No se pudo crear el producto\",\"errores\":\"Id ya existe\"}";
        }
    }
    /*
    Su uso desde consola mediante client url:
    curl -X PUT \
    http://localhost:8080/Simple-API-REST/product-service/products/\
    -H 'Content-Type: application/json' \
    -d '{
    "name":"Nevera Lg REF. JDK3-34-343",
    "price":2450000
    }'
    */
    /**
    * @PUT
    * @Consumes({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON })
    */
    update(prod) {
        if (this.service.update(prod)) {
            return "{\"ok\":\"true\", \"mensaje\":\"Producto modificado\",\"errores\":\"\"}";
        }
        else {
            return "{\"ok\":\"false\", \"mensaje\":\"No se pudo modificar el producto\",\"errores\":\"Id no existe\"}";
        }
    }
    /*
    Su uso desde consola mediante client url:
    curl -X DELETE http://localhost:8080/Simple-API-REST/productservice/products/
    */
    /**
    * @DELETE
    * @Path("{id}")
    */
    //public remove(@PathParam("id") Integer id): String {
    remove(id) {
        if (this.service.delete(id)) {
            return "{\"ok\":\"true\", \"mensaje\":\"Producto borrado\",\"errores\":\"\"}";
        }
        else {
            return "{\"ok\":\"false\", \"mensaje\":\"No se pudo borrar el producto\",\"errores\":\"Id no existe\"}";
        }
    }
}
exports.default = ProductController;
