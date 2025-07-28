import { getFromLocalStorage, updateItemInLocalStorage } from "../storage-crud";

export async function addItemQuantity(key: string, index: number, addItem: number = 1) {
    try {

        const purchase = getFromLocalStorage(key)

        if (purchase) {

            if (index >= 0 && index < purchase.productsCart.length) {

                const itemBeforeToCompare = purchase.productsCart[index];

                const quantityPurchasedUpdate = (purchase.productsCart[index].quantityPurchased || 0) + addItem

                purchase.productsCart[index].quantityPurchased = quantityPurchasedUpdate;

                if (Number(quantityPurchasedUpdate) > Number(itemBeforeToCompare.quantity)) {
                    return
                }

                const purchaseUpdated = await updatePurchaseValues(purchase)                    

                updateItemInLocalStorage(key, purchaseUpdated);

            } else {
                console.error('Index out of bounds');
            }
        } else {
            console.error('Item not found in localStorage');
        }

    } catch (err) {
        console.log('Error in incrementItemQuantity', err);
    }
}

export async function removeItemQuantity(key: string, index: number) {
    try {

        const purchase = getFromLocalStorage(key)

        if (purchase) {

            if (index >= 0 && index < purchase.productsCart.length) {

                const itemBeforeToCompare = purchase.productsCart[index];

                const quantityPurchasedUpdate = (purchase.productsCart[index].quantityPurchased || 0) - 1

                purchase.productsCart[index].quantityPurchased = quantityPurchasedUpdate;

                if (Number(quantityPurchasedUpdate) < 1) {
                    return
                }

                const purchaseUpdated = await updatePurchaseValues(purchase)                    

                updateItemInLocalStorage(key, purchaseUpdated);                

            } else {
                console.error('Index out of bounds');
            }
        } else {
            console.error('Item not found in localStorage');
        }

    } catch (err) {
        console.log('Error in incrementItemQuantity', err);
    }
}

export async function deleteItemPurchaseCartProducts(key: string, index: number) {
    try {

        const purchase = getFromLocalStorage(key)

        if (purchase) {

            if (index >= 0 && index < purchase.productsCart.length) {

                purchase.productsCart.splice(index, 1)

                const purchaseUpdated = await updatePurchaseValues(purchase)                    

                updateItemInLocalStorage(key, purchaseUpdated);                

            } else {
                console.error('Index out of bounds');
            }
        } else {
            console.error('Item not found in localStorage');
        }

    } catch (err) {
        console.log('Error in incrementItemQuantity', err);
    }
}

export async function updatePurchaseValues(purchase: any) {        
    try {
       
        purchase.subtotal_in_cents = 0,
        purchase.descountTotal_in_cents = 0,
        purchase.subTotalWithDescount_in_cents = 0

        purchase.productsCart?.forEach((product: any) => {
            purchase.subtotal_in_cents = purchase.subtotal_in_cents + (Number(product.price_in_cents) * Number(product.quantityPurchased));
            purchase.descountTotal_in_cents = purchase.descountTotal_in_cents + Number(product.descount_in_cents);
        });

        purchase.subTotalWithDescount_in_cents = purchase.subtotal_in_cents - purchase.descountTotal_in_cents;
        
        return purchase;

    } catch (err) {
        console.log(err, 'error in updatePurchaseValues')
    }
}