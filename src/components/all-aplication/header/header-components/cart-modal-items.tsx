"use client"

import { getFromLocalStorage, removeItemFromLocalStorage, updateItemInLocalStorage } from "@/services/storage-crud";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { CardItemCard } from "@/components/cart-purchase/card-product";
import { CartResumePurchase } from "@/components/cart-purchase/card-resume-purchase";
import { useEffect, useState } from "react";

interface CartModalProps {
}

const MenuContainer = styled.div`
    display: flex;
    flex-direction: column; /* Para garantir que os itens sejam empilhados verticalmente */
    align-items: center;    
    position: absolute;
    right: 0px;
    top: 100%;
    padding: 2px;
    z-index: 999;
    width: 270px;
    height: 100%;
    min-height: calc(100vh - 150px);
    max-height: calc(100vh - 150px); /* Altura máxima da viewport menos espaço para cabeçalhos e rodapé */
    overflow-y: auto; /* Adiciona barra de rolagem vertical quando necessário */
    background-color: var(--background-easy-gray);
    padding: 0 5px;
    

    h1{
        font-size: 18px;
        font-weight: 100;
        text-align: center;        
        color:red;
        width: 100%;
        margin-bottom: 10px;
        margin-top: 10px;
    }

    @media (max-width: 290px){//aki
        width: 230px;   
               
    }
`

const ContainerAllCardsItems = styled.div`    
    display: flex;
    flex-direction: column;   
    border: 1px solid var(--custom-gray-light);    
    border-radius: 8px;
    padding: 5px 5px;
    margin-bottom: 10px;    
    overflow-y: auto;
    width: 100%;  
    min-height: 100px;
    max-height: 220px;   
`

const ButtonNavigateCart = styled.button`
    background: green;
    mix-blend-mode: multiply;
    border-radius: 4px;
    color: white;
    border: none;
    cursor: pointer;
    padding: 10px 0;
    text-transform: uppercase;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 10px;

    >div{
        background-color: transparent;
    }
`



const ButtonAddMoreProducts = styled.button`
    background: var(--custom-gray-light);
    mix-blend-mode: multiply;
    border-radius: 4px;
    color: white;
    border: none;
    cursor: pointer;
    padding: 10px 0;
    text-transform: uppercase;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 10px;
    margin-bottom: 5px;

    font-size: 10px;

    >div{
        background-color: transparent;
        color: #000
        
    }
`

export function CartMenuModal(props: CartModalProps) {

    const router = useRouter();
    const [cartItems, setCartItems] = useState(getFromLocalStorage("cart-items") || [])

    const handleNavigate = (routerUrl: string) => {
        router.push(routerUrl)
    }
    // Obtém os itens do localStorage   

    function incrementItemQuantity(key: string, index: number) {
        try {

            if (cartItems) {

                if (index >= 0 && index < cartItems.length) {

                    // Incrementa a quantidade do item
                    const itemBeforeToCompare = { ...cartItems[index]};
                    const newItem = { ...cartItems[index], quantityPurchased: (cartItems[index].quantityPurchased || 0) + 1 };                    

                    if(newItem.quantityPurchased > itemBeforeToCompare.quantity ){
                        return
                    }                   

                    // Atualiza o item no localStorage usando a função existente
                    updateItemInLocalStorage(key, index, newItem);
                    
                    setCartItems(getFromLocalStorage("cart-items"))

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


    function decrementItemQuantity(key: string, index: number) {
        try {

            if (cartItems) {

                if (index >= 0 && index < cartItems.length) {

                    // Incrementa a quantidade do item
                    const itemBeforeToCompare = { ...cartItems[index]};
                    const newItem = { ...cartItems[index], quantityPurchased: (cartItems[index].quantityPurchased || 0) - 1 };                    

                    if(newItem.quantityPurchased < 1 ){
                        return
                    }                   

                    // Atualiza o item no localStorage usando a função existente
                    updateItemInLocalStorage(key, index, newItem);
                    
                    setCartItems(getFromLocalStorage("cart-items"))

                } else {
                    console.error('Index out of bounds');
                }
            } else {
                console.error('Item not found in localStorage');
            }

        } catch (err) {
            console.log('Error in decrementItemQuantity', err);
        }
    }


    function removeItemCart(key: string, index: number){
        try{
            removeItemFromLocalStorage(key, index)

            setCartItems(getFromLocalStorage("cart-items"))
        }catch(err){
            console.log('Error in remove item', err); 
        }
    }


    return (
        <MenuContainer>
            <h1>{`Itens no Carrinho (${cartItems.length > 0 ? cartItems.length : 0})`}</h1>

            <ContainerAllCardsItems>
                {cartItems.map((item: any, index: number) => (
                    <CardItemCard 
                        productInCartStorage={item} 
                        onClickAddItem={() => incrementItemQuantity('cart-items', index)}  
                        onClickDecrementItem={() => decrementItemQuantity('cart-items', index)}
                        removeItem={() => removeItemCart('cart-items', index)}
                    />
                ))}
            </ContainerAllCardsItems>

            <CartResumePurchase productCartListStorage={cartItems} />

            <ButtonNavigateCart><div>Ir Para o Carrinho</div></ButtonNavigateCart>
            <ButtonAddMoreProducts><div>Escolher Mais Produtos</div></ButtonAddMoreProducts>
        </MenuContainer>
    )

}


