"use client"

import { CartIconButtonColorWhite } from "@/components/icons/cart-icon-button-white-color"
import { formatPrice } from "@/utils/formatted-price"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { SelectsSizePMGandColorsProps } from "../selectsSizePMGandColors/selectsSizePMGandColors"

interface ProductInfoAddCartProps {
    product: any
}

const ContainerProductInFoButton = styled.div`
    display: flex;           
    justify-content: space-between;  
    flex-direction: column ;
    //background-color: green;
    padding: 0;

    button {
        background: #250375;                
        border-radius: 6px;
        color: white;
        border: none;
        cursor: pointer;
        padding: 8px 2px;
        text-transform: uppercase;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;    
        
        margin-top: 10px;
        margin-bottom: 10px;

        font-size: 12px;
    }
`

const ProductInfo = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;           

    span {
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        //color: var(--text-dark-2)
        color: white;
    }

    h2 {
        font-weight: 300;
        font-size: 32px;
        line-height: 150%;
        //color: var(--text-dark-2);
        color: white;
        margin-top: 0;        
    }        

    span:nth-of-type(2){// aki pega o 2 span da div e passa css so nele
        font-weight: 600;
        font-size: 20px;
        color: var(--shapes-dark);
        margin-bottom: 24px;                
    }

    p {
        font-weight: 400;
        font-size: 12px;
        color: (--text-dark);
        margin-bottom: 24px; 
    }

    div {        
        h3 {
            text-transform: uppercase;
            //color: var(--text-dark);
            font-weight: 500;
            font-size: 16px;
            color: white;
        }

        p {
            font-weight: 400;
            font-size: 14px;
            //color: var(--text-dark);
            color: white;
            margin-bottom: 20px;
        }
    }
`

const LinePriceAndQuantity = styled.div`    
    display: flex;
    justify-content: space-between;
    align-items: end;    
    width: 100%;    
    margin-top: 5px;  
    margin-bottom: 10px;  
    margin-top:10px;  
    background-color: red;
`

const ButtonsMaisEMenos = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    border-radius: 100%;
    background-color: var(--text-dark);
    color: white; 
    text-align: center; 
    font-size: 25px;
    line-height: 25px; 
    cursor: pointer;
`;

const QuantityContainer = styled.div`    
    input{
        width: 35px;        
        height: 35px;
        text-align: center;
        margin-left: 6px;
        margin-right: 6px;
        border: 1px solid var(--custom-purple-classifield-with-opacity);
        border-radius: 5px;      
        font-weight:700 ;
        font-size: 16px;
    }   

    >div{
        display: flex;
        justify-content: space-between;
        align-items: center;         
    }
`

const ContainerItemPriceAndTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;    

    .valorUnid{
        font-size: 16px;
    }
`

const ItemPrice = styled.div`    
    font-size: 22px;    
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;     
    color: white;
`

const LineValorTotal = styled.div`    
    display: flex;    
    align-items: end;
    justify-content: space-between;    
    font-size: 14px;   
    
    div {
        margin: 0 3px;        
    }

    .totalValueSemDescont {
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;
      color: var(--custom-gray-light);
      margin-right: 5px;
      text-decoration: line-through; // Adiciona o risco horizontal
    }

    .totalValue{
        font-weight: 400;
        font-size: 20px;
        line-height: 150%;
        //color: green
        color: white
    }
`

const LineSelectsButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    width: 100%;
    height: 25px;    
    gap: 10px;

    select {
        width: 100%;
        border-radius: 6px;
        height: 100%;
        padding: 2px;
    }
`

export function ProductInfoAddCart(props: ProductInfoAddCartProps) {

    async function incrementItemQuantity() {
        try {

        } catch (err) {
            console.log('Error in incrementItemQuantity', err);
        }
    }

    async function decrementItemQuantity() {
        try {

        } catch (err) {
            console.log('Error in incrementItemQuantity', err);
        }
    }

    async function removeItemCart(key: string, index: number) {
        try {

        } catch (err) {
            console.log('Error in incrementItemQuantity', err);
        }
    }

    const [selectedSize, setSelectedSize] = useState(props.product.size[0]?.size || '');

    const [selectedwidth, setSelectedwidth] = useState(props.product.size[0]?.width_in_centimeters || '');
    const [selectedHeight, setSelectedHeight] = useState(props.product.size[0]?.color[0]?.height_in_centimeters || '');
    const [selectedDepth, setSelectedDepth] = useState(props.product.size[0]?.color[0]?.depth_in_centimeters || '');

    const [selectedColor, setSelectedColor] = useState(props.product.size[0]?.color[0]?.color || '');

    return (
        <ContainerProductInFoButton>
            <ProductInfo>
                <h2>{props.product?.name}</h2>
                <span>
                    <span style={{ marginRight: '10px' }}>Desconto:</span>
                    {props.product.descount_in_percent != null && props.product.descount_in_percent > 0
                        ? `${props.product.descount_in_percent}%`
                        : props.product.descount_in_cents != null && props.product.descount_in_cents >= 0
                            ? formatPrice(props.product.descount_in_cents)
                            : '0,00'}
                </span>
                <LineValorTotal>
                    <div className="totalValueSemDescont">{formatPrice(props.product.price_in_cents)}</div>
                    <div className="totalValue">{formatPrice(props.product.price_in_cents)}</div>
                </LineValorTotal>
                <p>Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$100,00</p>
                <div>
                    <h3>Descrição</h3>
                    <p>{props.product?.description}</p>
                </div>
                

                <SelectsSizePMGandColorsProps
                    product={props.product}
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                    selectedColor={selectedColor}
                    setSelectedColor={setSelectedColor}
                />

            </ProductInfo>

            <LinePriceAndQuantity>

                <QuantityContainer>
                    <div>
                        <ButtonsMaisEMenos onClick={decrementItemQuantity}>-</ButtonsMaisEMenos>
                        <input type="text" value={1} readOnly />
                        <ButtonsMaisEMenos onClick={incrementItemQuantity}>+</ButtonsMaisEMenos>
                    </div>
                </QuantityContainer>
                <ContainerItemPriceAndTitle>
                    <ItemPrice>{formatPrice(props.product.price_in_cents ?? 0)}</ItemPrice>
                </ContainerItemPriceAndTitle>


            </LinePriceAndQuantity>

            <button>
                <CartIconButtonColorWhite />
                Adicionar ao carrinho
            </button>
        </ContainerProductInFoButton>
    )
}