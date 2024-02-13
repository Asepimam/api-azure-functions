import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import productsService from "../../services/productsService";

export async function CreateProduct(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);
    let response: any;
   try{
        const product = await request.json();
        response = await productsService.create(product);
        context.log(product)

        return {
            status: 200,
            jsonBody: response,
        };
    } catch (error) {
        return {
            status: 500,
            body: error.message,
        };
    }
};

app.http('CreateProduct', {
    methods: ['POST'],
    route: 'product',
    handler: CreateProduct
});
