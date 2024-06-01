"use client"

import { getFromLocalStorage } from "@/services/storage-crud";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { CardItemCard } from "@/components/cart-purchase/card-product";
import { CartResumePurchase } from "@/components/cart-purchase/card-resume-purchase";

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
    min-height: calc(100vh - 220px);
    max-height: calc(100vh - 220px); /* Altura máxima da viewport menos espaço para cabeçalhos e rodapé */
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
    overflow-y: scroll;
    width: 100%;   
    height: 190px;
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

    const handleNavigate = (routerUrl: string) => {
        router.push(routerUrl)
    }

    // Obtém os itens do localStorage
    const cartItems = getFromLocalStorage("cart-items");

    return (
        <MenuContainer>            
            <h1>{`Itens no Carrinho (${cartItems.length > 0 ? cartItems.length : 0})`}</h1>

            <ContainerAllCardsItems>
                {cartItems.map((item: any, index: number) => (
                    <CardItemCard productInCartStorage={item}/>
                ))}
            </ContainerAllCardsItems>

            <CartResumePurchase productCartListStorage={cartItems}/>            

            <ButtonNavigateCart><div>Ir Para o Carrinho</div></ButtonNavigateCart>
            <ButtonAddMoreProducts><div>Escolher Mais Produtos</div></ButtonAddMoreProducts>
        </MenuContainer>
    )

}


