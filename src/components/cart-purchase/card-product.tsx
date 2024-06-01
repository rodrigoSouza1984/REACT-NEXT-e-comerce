"use client"

import { formatPrice } from "@/utils/formatted-price";
import styled from "styled-components";
import { DeleteIconInGrayColor } from "../icons/delete-icon";

interface CardItemCardProps {
    productInCartStorage: any
}

const CartItemCard = styled.div`    
    border: 'none';
    //border: 1px solid var(--custom-gray-light);
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 10px;
    width: 100%;    
    max-height: 150px;    
`

const ItemImage = styled.img`    
    top: 0; /* Alinha a imagem ao topo */
    left: 0; /* Alinha a imagem à esquerda */
    width: 60px; /* Largura da imagem */
    height: 70px; /* Altura da imagem igual à altura do cartão */
    object-fit: cover; /* Para manter a proporção da imagem */
    border-radius: 8px;    
    margin-top: 0;
    
`

const ContainerImageAndPrice = styled.div`
    display: flex;
    flex-direction: column;    
    justify-content: space-between;
    align-items: center;
    padding: 0px 7px;
    //background-color: red;
    width: 168px;
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
    width: 85%;    

    div{
        max-width: 140px;
        padding: 0;
        overflow: hidden;
        position: relative;
        display: inline-block;        
        text-align: center;
        text-decoration: none;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`

const LineConfigItem = styled.div`
    width: 100%;
    display: flex;    
    align-items: start;    
    font-size: 8px; 
    margin-top: 1px;  
    margin-bottom: 1px;
    
    >div{
        margin-left: 3px;
    }
`


const LineDescProduto = styled.div`
    width: 100%;
    display: flex;    
    align-items: center;
    justify-content: space-between;    
    font-size: 10px; 
    margin-top: 5px;  
    margin-bottom: 8px;

    .descProduto{
        color: green;       
    }
    
`

const ItemPrice = styled.div`    
    font-size: 10px;    
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;     
`

const LinePriceAndQuantity = styled.div`    
    display: flex;
    justify-content: space-between;
    align-items: center;    
    width: 100%;    
    margin-top: 5px;
    //background-color: red;
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

export function CardItemCard(props: CardItemCardProps) {
    return (
        <CartItemCard >

            <ItemImage src={props.productInCartStorage.image_url} alt={props.productInCartStorage.name} />


            <ContainerImageAndPrice>

                <LineNameAndTrashIcon>
                    <ItemName>
                        <div>{props.productInCartStorage.name}</div>
                    </ItemName>
                    <DeleteIconInGrayColor />
                </LineNameAndTrashIcon>

                {props.productInCartStorage.size ? <LineConfigItem>
                    <div>Tamanho:</div>
                    <div>{props.productInCartStorage.size}</div>
                </LineConfigItem> : ''}

                {props.productInCartStorage.width_in_centimeters > 0 ? <LineConfigItem>
                    <div>Largura:</div>
                    <div>1,98</div>
                </LineConfigItem> : ''}

                {props.productInCartStorage.height_in_centimeters > 0 ? <LineConfigItem>
                    <div>Altura:</div>
                    <div>1,98</div>
                </LineConfigItem> : ''}

                {props.productInCartStorage.depth_in_centimeters > 0 ? <LineConfigItem>
                    <div>Profundidade:</div>
                    <div>1,98</div>
                </LineConfigItem> : ''}

                {props.productInCartStorage.codeColor ? <LineConfigItem>
                    <div>Cor/codigo:</div>
                    <div>{props.productInCartStorage.codeColor}</div>
                </LineConfigItem> : ''}

                {props.productInCartStorage.flavor ? <LineConfigItem>
                    <div>Sabor:</div>
                    <div>{props.productInCartStorage.flavor}</div>
                </LineConfigItem> : ''}

                {props.productInCartStorage.Weight_in_grams > 0 ? <LineConfigItem>
                    <div>Peso:</div>
                    <div>1,00</div>
                </LineConfigItem> : ''}

                {props.productInCartStorage.descount_in_cents > 0 ? <LineDescProduto>
                    <div>Desc. Produto</div>
                    <div className="descProduto">R$10,00</div>
                </LineDescProduto> : ''}

                <LinePriceAndQuantity>

                    <QuantityContainer>
                        <div>
                            <ButtonsMaisEMenos>-</ButtonsMaisEMenos>
                            <input type="text" value={props.productInCartStorage.quatityPurchased} readOnly />
                            <ButtonsMaisEMenos>+</ButtonsMaisEMenos>
                        </div>
                    </QuantityContainer>

                    <ItemPrice>{formatPrice(props.productInCartStorage.price_in_cents)}</ItemPrice>

                </LinePriceAndQuantity>

            </ContainerImageAndPrice>

        </CartItemCard>
    )

}