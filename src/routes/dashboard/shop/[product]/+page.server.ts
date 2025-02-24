
import { products, type Product } from '../../../../lib/server/data.js';

export const load = async ({params}) => {
    let productId = params.product
    
    let product: Product = products[0]
    return {
        product
    }
};