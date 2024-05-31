import { CartIcon } from "@/components/icons/cart-icon";
import { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface CartControlProps extends InputHTMLAttributes<HTMLInputElement> { 
    onClick?: () => void;
}

const Container = styled.button`   
    position: relative;
    cursor: pointer;
    border: none;
    background: transparent;
    width: 25px;
    height: 28px;    
    //background-color: green;
    
    svg {  
        
    }
`

const CartCount = styled.span`
    position: absolute;
    bottom: -3px; // Ajuste a posição inferior conforme necessário
    right: -5px; // Ajuste a posição direita conforme necessário
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    font-size: 8px;
    background-color: var(--delete-color);
    color: white;
`;

export function CartControl() {
    return (
        <Container>
            <CartIcon/>
            <CartCount>22</CartCount>
        </Container>
    );
}
