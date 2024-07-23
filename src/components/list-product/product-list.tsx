"use client"

import { products } from "@/api/database-mock/products"
import styled from "styled-components"
import { ProductCard } from "../product-card/product-card-component"

interface ProductsListProps {
}

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100%; /* Adicionando altura de 100% para garantir que o Container ocupe todo o espaço disponível */
background-color: var(--custom-purple-classifield);    
`

const ListContainer = styled.div`
    display: grid;   
    justify-content: center; /* Centralizando horizontalmente */
    align-items: center; /* Centralizando verticalmente */ 
    grid-template-columns: repeat(1, minmax(20%, 1fr));
    grid-gap: 20px;    
    width: 100%;
    max-width: 100%;   
    background-color: var(--custom-purple-classifield);
    margin-top: 0px;    

    @media (min-width: ${props => props.theme.celPhoneBreakPointSmaller}){//aki        
        grid-template-columns: repeat(2, minmax(20%, 1fr));
        grid-gap: 20px;       
    }
    
    @media (min-width: ${props => props.theme.celPhoneBreakPoint}){//aki       
        grid-template-columns: repeat(3, minmax(5%, 1fr));
        grid-gap: 20px; 
        margin-top: 10px;        
    }
    
    @media (min-width: ${props => props.theme.smallerTabletBreakPoint}){//aki
        grid-template-columns: repeat(3, minmax(15%, 1fr));
        grid-gap: 30px;
        margin-top: 20px;        
    }

    @media (min-width: ${props => props.theme.tabletBreakPoint}){//aki
        grid-template-columns: repeat(3, minmax(20%, 1fr));
        grid-gap: 30px;
        margin-top: 20px;        
    }    
`

//fixo 4 na tela -> grid-template-columns: repeat(4, 256px);

export function ProductList(props: ProductsListProps) {   
    const data = products

    console.log(data)
    return (
        <Container>
            <ListContainer>
                {data?.map(product => <ProductCard
                    key={product.id}                    
                    product={product}
                />)}
            </ListContainer>
        </Container>
    )
}