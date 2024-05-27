import { asksProduct } from "@/api/database-mock/asks-product"

export function getAllAsksByProductId(productId: string){
    try{

        const listAsksProduct = asksProduct.filter(r => r.productIsAddedAsk === productId)   
        
        if(!listAsksProduct){
            throw new Error('Asks not found');
        }

        return listAsksProduct

    }catch(err){
        //console.log('getAllProducts function: ', err)
        return `error in getAll asks products functions: ${err}`
    }
}


