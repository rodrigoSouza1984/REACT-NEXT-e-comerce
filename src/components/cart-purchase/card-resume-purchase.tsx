"use client"

import { formatPrice } from "@/utils/formatted-price";
import styled from "styled-components";
import { DeleteIconInGrayColor } from "../icons/delete-icon";
import { Divider } from "../all-aplication/header/divider";
import { useEffect } from "react";
import { usePurchaseStorageContext } from "@/hooks/purchase/use-purchase-storage";

interface CartResumePurchaseProps {
    }

const CartCardValueTotalPurchase = styled.div`
    position: relative;
    border: 1px solid var(--custom-gray-light);
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

    h5{
        font-size: 12px;
        text-align: center;        
        font-weight: 100;
        color:#000;
        width: 100%;
        margin-top: 3px;
        margin-bottom: 2px;
    }

    span {
        margin-top: 0px;
        margin-bottom: 0;
    }
`

const ContainerLinesTotal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    width: 100%;
    padding: 10px 5px;    
    margin-top: 0;
`

const LineSubTotal = styled.div`
    width: 100%;
    display: flex;    
    align-items: center;
    justify-content: space-between;    
    font-size: 12px;
`

const LineDescountTotal = styled.div`
    width: 100%;
    display: flex;    
    align-items: center;
    justify-content: space-between;    
    font-size: 12px;

    .descontTotalValue{
        color: green
    }
    
`


const LineValorTotal = styled.div`
    width: 100%;
    display: flex;    
    align-items: end;
    justify-content: space-between;    
    font-size: 14px;
    position: absolute;
    bottom: 10px;   
    
    div {
        margin: 0 3px;        
    }

    .totalValueSemDescont {
      color: var(--custom-gray-light);
      margin-right: 5px;
      text-decoration: line-through; // Adiciona o risco horizontal
    }

    .totalValue{
        color: green
    }
`

export function CartResumePurchase(props: CartResumePurchaseProps) {

    const { purchaseStorage, setPurchaseStorage } = usePurchaseStorageContext();    

    return ( 
        <CartCardValueTotalPurchase>
                <h5>Resumo do Pedido</h5>
                <Divider />

                <ContainerLinesTotal>
                    <LineSubTotal>
                        <div>Subtotal</div>
                        <div>{formatPrice(purchaseStorage.subtotal_in_cents)}</div>
                    </LineSubTotal>

                    <LineDescountTotal>
                        <div>Desconto Total</div>
                        <div className="descontTotalValue">{formatPrice(purchaseStorage.descountTotal_in_cents)}</div>
                    </LineDescountTotal>

                    <LineValorTotal>
                        <div>Subtotal Com Desconto</div>
                        <div className="totalValueSemDescont">{formatPrice(purchaseStorage.subtotal_in_cents)}</div>
                        <div className="totalValue">{formatPrice(purchaseStorage.subTotalWithDescount_in_cents)}</div>
                    </LineValorTotal>

                </ContainerLinesTotal>

            </CartCardValueTotalPurchase>
    ) 
}