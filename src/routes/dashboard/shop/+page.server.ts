import { fail } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types.js";
import { validateName } from "$lib/server/validation";
import type { Product } from "$lib/server/db/schema/product.js";

export const load: PageServerLoad = async ({ locals }) => {
    let admin = locals.admin;
    
    let products: Product[] = [
        {
            id: 1,
            name: "Infinity cube",
            price: 20,
            description: "This is an infinity cube",
            category: "cube",
            updated_at: new Date(),
            created_at: new Date(),
            deleted_at: null
        }
    ];
    
    return { products, admin };
};

export const actions: Actions = {
    add: async (event) => {
        const formData = await event.request.formData();

        let productData = {
            name: formData.get('productName') as string,
            price: parseFloat(formData.get('price') as string),
            category: formData.get('category') as string,
            stock: parseInt(formData.get('stock') as string),
        };

        if (!validateName(productData.name)) {
            return fail(400, { error: "Invalid product name." });
        }

        // Insert into database (mocked for now)
        console.log("New product added:", productData);
        
        return { success: "Successfully added product!" };
    },
    update: () => {},
    remove: () => {}
};
