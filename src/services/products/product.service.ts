import { products } from "@/api/database-mock/products"

export function getAllProducts(){
    try{

        const listProducts = products

        return listProducts

    }catch(err){
        //console.log('getAllProducts function: ', err)
        return `error in getAll products functions: ${err}`
    }
}


export function getProductById(productId: string){
    try{

        const listProducts = products

        const product = listProducts.find(r => r.id === productId)

        if(!product){
            throw new Error('Product not found');
        }

        return product

    }catch(err: any){
        //console.log('getAllProducts error function: ', err)
        return `error in getById product function: ${err}`
    }
}