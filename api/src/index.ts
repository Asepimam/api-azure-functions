import { app } from "@azure/functions";
import { CreateProduct } from "./functions/CreateProduct";
import { DeleteProduct } from "./functions/DeleteProduct";
import { UpdateProduct } from "./functions/UpdateProduct";
import { GetProducts } from "./functions/GetProducts";

app.http('CreateProduct',{
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: CreateProduct,
    route:"products"
});

app.http('DeleteProduct', {
    methods: ['DELETE'],
    authLevel: 'anonymous',
    handler: DeleteProduct,
    route:'products/{id}'
});

app.http('UpdateProduct', {
    methods: ['PUT'],
    authLevel: 'anonymous',
    handler: UpdateProduct,
    route: 'products'
});

app.http('GetProducts', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: GetProducts,
    route: 'products' 
});
