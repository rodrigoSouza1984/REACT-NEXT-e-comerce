"use client"

import { CartIconButtonColorWhite } from "@/components/icons/cart-icon-button-white-color"
import { formatPrice } from "@/utils/formatted-price"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { SelectsSizePMGandColorsProps } from "../selectsSizePMGandColors/selectsSizePMGandColors"
import { addDataInLocalStorage, getFromLocalStorage, removeItemFromLocalStorage } from "@/services/storage-crud"
import { StorageKeys } from "@/utils/global-vars"
import { addItemQuantity } from "@/services/purchase/purchase.service"
import { useCart } from "@/contexts/cart-context"

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

const ButtonsMaisEMenos = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
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
        height: 25px;
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
    align-items: start;
    justify-content: space-between;
    padding: 20px 10px;
    //width: 100%;
    height: 20px;    
    gap: 10px;
    margin-top: 40px;
    //background-color: green;

    select {
        width: 100%;
        border-radius: 6px;
        //height: 100%;
        height: 25px;
        padding: 2px;
    }
`

const LinePriceAndQuantity = styled.div`    
    display: flex;
    justify-content: space-between;
    align-items: center;    
    width: 100%;    
    height: 50%;
    padding: 2px 10px ;  
    margin-bottom: 10px;  
    margin-top:10px;  
    //background-color: red;
`

export function ProductInfoAddCart(props: ProductInfoAddCartProps) {

    const { updateCartCount } = useCart();
    const [qtdItems, setQtdItems] = useState(1)
    const [priceItemFormated, setPriceItemFormated] = useState(formatPrice(props.product.price_in_cents ?? 0))
    const [selectedSize, setSelectedSize] = useState(
        Array.isArray(props.product.size) && props.product.size.length > 0
            ? props.product.size[0].size
            : ''
    );
    const [selectedColor, setSelectedColor] = useState(
        Array.isArray(props.product?.size) &&
            props.product.size.length > 0 &&
            Array.isArray(props.product.size[0].color) &&
            props.product.size[0].color.length > 0
            ? props.product.size[0].color[0].color
            : ''
    );


    async function incrementItemQuantity() {
        try {

            if (Number(qtdItems) >= Number(props.product.quantity)) {
                return
            }

            setQtdItems(qtdItems + 1);

            const newPrice = props.product.price_in_cents * (qtdItems + 1);
            setPriceItemFormated(formatPrice(newPrice ?? 0));

        } catch (err) {
            console.log('Error in incrementItemQuantity', err);
        }
    }

    async function decrementItemQuantity() {
        try {

            if (Number(qtdItems) - 1 < 1) {
                return
            }

            setQtdItems(qtdItems - 1);

            const newPrice = props.product.price_in_cents * (qtdItems - 1);
            setPriceItemFormated(formatPrice(newPrice ?? 0));

        } catch (err) {
            console.log('Error in incrementItemQuantity', err);
        }
    }

    async function incrementItemQuantityCartModal(key: StorageKeys, productId: number, qtdItemAdd: number) {
        try {
            const stored = getFromLocalStorage(key);

            if (!stored || !Array.isArray(stored.productsCart)) {
                console.error("Carrinho inválido ou não encontrado");
                return;
            }

            const index = stored.productsCart.findIndex((item: any) => item.id === productId);

            if (index === -1) {
                console.warn("Produto não encontrado no carrinho");
                return;
            }

            // Agora chama corretamente sua função que já faz tudo
            await addItemQuantity(key, index, qtdItemAdd);

        } catch (err) {
            console.log("Error in incrementItemQuantityCartModal", err);
        }
    }

    function addToCart(product: any) {
        const cart = getFromLocalStorage(StorageKeys.PURCHASHE, {
            productsCart: [],
            subtotal_in_cents: 0,
            descountTotal_in_cents: 0,
            subTotalWithDescount_in_cents: 0,
        });

        // Garante que productsCart seja um array antes de usar findIndex
        const productsCart = Array.isArray(cart.productsCart) ? cart.productsCart : [];

        const existingIndex = productsCart.findIndex((item: any) => item.id === product.id);

        // Se o produto já está no carrinho
        if (existingIndex !== -1) {

            incrementItemQuantityCartModal(StorageKeys.PURCHASHE, product.id, qtdItems);
            updateCartCount();
            return;
        }

        const priceTotal = product.price_in_cents * qtdItems;
        const descountTotal = product.descount_in_cents * qtdItems;
        const priceWithDiscount = priceTotal - descountTotal;

        const productToAdd = {
            ...product,
            quantityPurchased: qtdItems
        };

        const updatedCart = {
            productsCart: [...(cart?.productsCart || []), productToAdd],
            subtotal_in_cents: (cart?.subtotal_in_cents || 0) + priceTotal,
            descountTotal_in_cents: (cart?.descountTotal_in_cents || 0) + descountTotal,
            subTotalWithDescount_in_cents:
                (cart?.subTotalWithDescount_in_cents || 0) + priceWithDiscount,
        };

        const { updateLocalStorage } = addDataInLocalStorage(StorageKeys.PURCHASHE, {
            productsCart: [],
            subtotal_in_cents: 0,
            descountTotal_in_cents: 0,
            subTotalWithDescount_in_cents: 0,
        });

        updateLocalStorage(updatedCart);

        updateCartCount();

        console.log("Produto adicionado ao carrinho");
    }

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

            </ProductInfo>

            <LineSelectsButtons>
                <SelectsSizePMGandColorsProps
                    product={props.product}
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                    selectedColor={selectedColor}
                    setSelectedColor={setSelectedColor}
                />
            </LineSelectsButtons>


            <LinePriceAndQuantity>

                <QuantityContainer>
                    <div>
                        <ButtonsMaisEMenos onClick={decrementItemQuantity}>-</ButtonsMaisEMenos>
                        <input type="text" value={qtdItems} readOnly />
                        <ButtonsMaisEMenos onClick={incrementItemQuantity}>+</ButtonsMaisEMenos>
                    </div>
                </QuantityContainer>
                <ContainerItemPriceAndTitle>
                    <ItemPrice>{priceItemFormated}</ItemPrice>
                </ContainerItemPriceAndTitle>


            </LinePriceAndQuantity>

            <button onClick={() => addToCart(props.product)}>
                <CartIconButtonColorWhite />
                Adicionar ao carrinho
            </button>
        </ContainerProductInFoButton>
    )
}