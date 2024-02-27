import { HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import productService from "../services/product.services";

export async function GetProducts(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    try {
        const products =  await productService.read()
        return{
            status: 200,
            body: products
        }
    } catch (error) {
        return {
            status: 500,
            body: error.message
        }
    }
};

