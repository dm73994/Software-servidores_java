
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

import express from "express";
import Product from "../co.unicauca.products.domain.entity/Product";
import ProductService from "../co.unicauca.products.domain.service/ProductService";

// @Stateless
// @Path("products")
class ProductController {
    /**
     * Routing with expressJS
    */
    private router = express.Router();
    /**
    * Se inyecta la única implementación que hay de ProductService
    */
    /**
     * @Inject
    */
    private service: ProductService= new ProductService();;
    public ProductController() {
        this.service = new ProductService();
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
    public  findAll(): Array<Product>|null {
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
    public findById(id: number): Product|null {
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
    public create(prod: Product): String {
        if (this.service.create(prod)) {
            return "{\"ok\":\"true\", \"mensaje\":\"Producto creado\",\"errores\":\"\"}";
        } else {
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
    public update(prod: Product): String {
        if (this.service.update(prod)) {
            return "{\"ok\":\"true\", \"mensaje\":\"Producto modificado\",\"errores\":\"\"}";
        } else {
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
    public remove(id: number): String {
        if (this.service.delete(id)) {
            return "{\"ok\":\"true\", \"mensaje\":\"Producto borrado\",\"errores\":\"\"}";
        } else {
            return "{\"ok\":\"false\", \"mensaje\":\"No se pudo borrar el producto\",\"errores\":\"Id no existe\"}";
        }
    }
}

export default ProductController