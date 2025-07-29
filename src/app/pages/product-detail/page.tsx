"use client"

import { BackBtn } from "@/components/back-button/back-button";
import { ImagemPreviewAndMiniImages } from "@/components/product-detail/imagem-preview-and-mini-images/imagem-preview-and-mini-images";
import { ProductInfoAddCart } from "@/components/product-detail/product-info-add-cart/product-info-add-cart";
import { useProductContext } from "@/hooks/products/use-products-context";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: start;
    flex-direction: column;
    padding-top: 5px; 
    height:100%;    
    
    @media (min-width: ${props => props.theme.celPhoneBreakPoint}){//aki
        //background-color: red;             
        //padding : 10px 28px;  
    }

    @media (min-width: ${props => props.theme.tabletBreakPoint}){//aki
        //padding : 10px 25px;
        //background-color: blue; 
    }

    @media (min-width: ${props => props.theme.desktopBreakpoint}){//aki
        //background-color: yellow; 
        //padding: 20px 120px;//aki
    }

    section {
        display: flex;        
        justify-content: center;
        width: 100%; //secao ocupa 100% do espaco
        gap: 32px;// espacamento entre os itens
        margin-top: 5px;
        margin-bottom: 15px;
        
        flex-direction: column;

        @media (min-width: ${props => props.theme.celPhoneBreakPoint}){//aki            
            flex-direction: row;              
        }       
        
        img {            
            width: 100%;
            height: 100%;

            @media (min-width: ${props => props.theme.celPhoneBreakPoint}){//aki 
                max-width: 640px;           
                width: 100%;             
            }  
        }       
    }
`

export default function ProductDetail(props?: any) {
    const { product, setProduct } = useProductContext()
    let data: any = product

    // Proteção contra contexto indefinido ou dados incompletos
    if (!data || !data.images) {
        return (
            <Container>
                <BackBtn navigate="/" />
                <p>Produto não encontrado ou não carregado.</p>
            </Container>
        );
    }

    return (
        <Container>
            <BackBtn navigate="/" />
            <section>
                <ImagemPreviewAndMiniImages images={data.images} />
                <ProductInfoAddCart product={data} />
            </section>
        </Container>
    );
}