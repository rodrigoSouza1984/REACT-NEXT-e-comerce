"use client"

import styled from "styled-components";
import { CartPurchaseIcon } from "../icons/cart-purchase-icon";

interface CartWithoutProductsProps {
    }

const Container = styled.div`
    position: relative;
    border: 1px solid var(--custom-purple-classifield-with-opacity);
    border-radius: 8px;
    padding: 0px;
    margin-bottom: 10px;
    margin-top: 10px;
    width: 100%;
    height: 160px;
    min-height: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;   
    justify-content: center ;
    padding: 10px 10px;

    svg {
        margin-top: 0px;
        margin-bottom: 0;
        width: 30px;
        height: 30px;        
    }

    h1{
        font-size: 10px;
        color: red;
        margin-top: 10px;
        margin-bottom: 3px;
    }

    h5{
        font-size: 12px;
        text-align: center;        
        font-weight: 100;
        color:#B0B0B0;
        width: 100%;
        margin-top: 3px;
        margin-bottom: 2px;
    }
`



export function CartWithoutProduct(props: CartWithoutProductsProps) {
    return ( 
        <Container>
               <CartPurchaseIcon/>
               <h1>SEU CARRINHO ESTÁ VAZIO!</h1>
               <h5>Explore nossas categorias e produtos e adicione os itens desejados ao seu carrinho de compras. </h5>
        </Container>
    ) 
}