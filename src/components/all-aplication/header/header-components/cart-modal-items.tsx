"use client"

import { DeleteIconInGrayColor } from "@/components/icons/delete-icon";
import { formatPrice } from "@/utils/formatted-price";
import { useRouter } from "next/navigation";
import styled from "styled-components";

interface CartModalProps {
}

const MenuContainer = styled.div`
    display: flex;
    flex-direction: column; /* Para garantir que os itens sejam empilhados verticalmente */
    align-items: center;
    position: absolute;
    right: 0px;
    top: 100%;
    padding: 10px;
    z-index: 999;
    width: 240px;
    height: 100%;
    min-height: calc(100vh - 120px);
    max-height: calc(100vh - 120px); /* Altura máxima da viewport menos espaço para cabeçalhos e rodapé */
    overflow-y: auto; /* Adiciona barra de rolagem vertical quando necessário */
    background-color: var(--background-easy-gray);
`


const CartItemCard = styled.div`
    border: 1px solid var(--custom-gray-light);
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 10px;
    width: 100%;
    height: 80px;
`

const ItemImage = styled.img`
    //position: absolute; /* Posiciona a imagem absolutamente dentro do CartItemCard */
    top: 0; /* Alinha a imagem ao topo */
    left: 0; /* Alinha a imagem à esquerda */
    width: 50px; /* Largura da imagem */
    height: 60px; /* Altura da imagem igual à altura do cartão */
    object-fit: cover; /* Para manter a proporção da imagem */
    border-radius: 8px;
`

const ContainerImageAndPrice = styled.div`
    display: flex;
    flex-direction: column;    
    justify-content: space-between;
    align-items: center;
    padding: 0px 5px;
    //background-color: red;
    width: 150px;
    height: 100%;
    margin-left: 5px;
    
`

const LineNameAndTrashIcon = styled.div`    
    display: flex;
    justify-content: space-between;
    align-items: center;    
    width: 100%;    

    svg {
        //background-color: red;
        height: 20px;
        width: 18px;
    }
`

const ItemName = styled.div`
    font-size: 12px;      
    white-space: nowrap; 
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;    
`

const ItemPrice = styled.div`    
    font-size: 10px;    
    height: 100%;
    text-align: center;
`

const LinePriceAndQuantity = styled.div`    
    display: flex;
    justify-content: space-between;
    align-items: center;    
    width: 100%;    
`

const QuantityContainer = styled.div`    
    input{
        width: 22px;
        height: 22px;
        text-align: center;
        margin-left: 4px;
        margin-right: 4px;
        border: 1px solid var(--custom-gray-light);
        border-radius: 5px;        
    }   

    >div{
        display: flex;
        justify-content: space-between;
        align-items: center;  
        //background-color: green;
    }
`

const ButtonsMaisEMenos = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: var(--text-dark);
    color: white; /* Define a cor do texto como branca */
    text-align: center; /* Centraliza o texto horizontalmente */
    font-size: 15px;
    line-height: 15px; /* Ajusta a altura do texto para centralização vertical */
`;

export function CartMenuModal(props: CartModalProps) {

    const router = useRouter();

    const handleNavigate = (routerUrl: string) => {
        router.push(routerUrl)
    }

    const getCartItemsFromLocalStorage = () => {
        const cartItemsString = localStorage.getItem("cart-items");
        if (cartItemsString) {
            return JSON.parse(cartItemsString);
        }
        return [];
    };

    // Obtém os itens do localStorage
    const cartItems = getCartItemsFromLocalStorage();


    return (
        <MenuContainer>
            {cartItems.map((item: any, index: number) => (
                <CartItemCard key={index}>

                    <ItemImage src={item.image_url} alt={item.name} />


                    <ContainerImageAndPrice>

                        <LineNameAndTrashIcon>
                            <ItemName>{item.name}</ItemName>
                            <DeleteIconInGrayColor />
                        </LineNameAndTrashIcon>

                        <LinePriceAndQuantity>

                            <QuantityContainer>
                                <div>
                                    <ButtonsMaisEMenos>-</ButtonsMaisEMenos>
                                    <input type="text" value={item.quatityPurchased} readOnly />
                                    <ButtonsMaisEMenos>+</ButtonsMaisEMenos>
                                </div>
                            </QuantityContainer>

                            <ItemPrice>{formatPrice(item.price_in_cents)}</ItemPrice>

                        </LinePriceAndQuantity>



                    </ContainerImageAndPrice>



                </CartItemCard>
            ))}
        </MenuContainer>
    )

}


