"use client"

import { Saira_Stencil_One } from "next/font/google";
import styled from "styled-components"
import { InputWithSearchIcon } from "./header-components/input-with-search-icon";
import { CartControl } from "./header-components/cart-control-with-badge";
import { Avatar } from "./header-components/avatar";
import { useEffect, useState, useRef } from "react";
import { useFiltersContext } from "@/hooks/products/use-filters-contexts";
import { AvatarMenuModal } from "./header-components/avatar-menu-modal";
import { addDataInLocalStorage } from "@/services/storage-crud";
import { productsCart } from "@/api/database-mock/products-cart";
import { formatPrice } from "@/utils/formatted-price";
import { CartMenuModal } from "./header-components/cart-modal-items";

const SairaStencil = Saira_Stencil_One({
    weight: ['400'],
    subsets: ["latin"]
});

interface HeaderProps {
}

const TagHeader = styled.header`
    display: flex;   
    align-items: end;
    justify-content: space-between;
    padding: 10px 10px;    
    background-color: var(--background-easy-gray);    
    width: 100%; 
    
    @media (min-width: ${props => props.theme.celPhoneBreakPoint}){//aki
        padding: 10px 18px;
        align-items: center;
        //background-color:blue ; 
    }
    
    @media (min-width: ${props => props.theme.smallerTabletBreakPoint}){//aki
        padding: 10px 20px;
        align-items: center;
        //background-color:blue ; 
    }       

    @media (min-width: ${props => props.theme.tabletBreakPoint}){//aki           
        padding: 10px 20px; 
        flex-wrap: wrap;
        align-items: center;
        //background-color:red ;   
    }
    
    @media (min-width: ${props => props.theme.desktopBreakpoint}){//aki
        padding: 10px 24px;//aki
        flex-wrap: wrap;
        align-items: center;
        //background-color:yellow ; 
    }    
`

const Logo = styled.a`
    color: var(--custom-purple-classifield);
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    text-decoration: none;     

    @media (min-width: ${props => props.theme.celPhoneBreakPoint}){//aki
        font-size: 30px;
        margin-right: -20px;
    }
    
    @media (min-width: ${props => props.theme.smallerTabletBreakPoint}){//aki
        font-size: 30px;
        margin-right: -20px;
    }     

    @media (min-width: ${props => props.theme.tabletBreakPoint}){//aki
        font-size: 36px;
        margin-right: 50px;
    }

    @media (min-width: ${props => props.theme.desktopBreakpoint}){//aki
        font-size: 42px;
        margin-right: 100px;
    }
`

const ContainerSearchCartIconAvatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;   
    
    > div {				// 1 div da tag header acima > indica 1 div 
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: end;
        gap: 2px;        
        width: 100%;
        padding: 4px 0px;
        //background-color: red;
    }    


    div {						// aki para o icone carrinho e avatar ficarem alinhados
            display: flex;
            //flex-direction: row;
            //justify-content: end;
            align-items: end;            
    }


    @media (max-width: 440px){//aki
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: end;
        gap: 2px ; 
        margin-left: -135px;
    }
`;


const AvatarWithModal = styled.div`
    padding-top: 8px;
    position: relative;   
    
    >div {// para acertar posicao do modal menu modal
        right: -9px; /* Posiciona o modal à direita */
        top: 110%;
    }

`

const CartControlWithModal = styled.div`
    padding-top: 8px;
    position: relative;   
    
    >div {// para acertar posicao do modal menu modal        
        right: -45px; /* Posiciona o modal à direita */
        top: 150%;        

        @media (min-width: ${props => props.theme.celPhoneBreakPoint}){//aki
            right: -55px;
        }
    
        @media (min-width: ${props => props.theme.smallerTabletBreakPoint}){//aki
            right: -58px;
            top: 155%;
        }

        @media (min-width: ${props => props.theme.tabletBreakPoint}){//aki
            top: 160%;
        }

        @media (min-width: ${props => props.theme.desktopBreakpoint}){//aki
            right: -62px;
            top: 180%;
        }
    }

`

export function Header(props: HeaderProps) {

    const { inputHeaderValue, setInputHeaderValue } = useFiltersContext();
    const [menuAvatar, setMenuAvatar] = useState(false);
    const iconRef = useRef<HTMLDivElement>(null);
    const { value, updateLocalStorage } = addDataInLocalStorage("cart-items", [])

    const [modalCart, setModalCart] = useState(false);

    const handleAddValueInputPerDigit = (data: any) => {
        setInputHeaderValue(data)
        console.log(data, 'handleAddValueInputPerDigit', inputHeaderValue)
    }

    const clearInputClickEnterOrClickIconLoopa = (event: any) => {
        if (event.key === 'Enter' || event.key === 'Click') {
            console.log(event.key, 'clearInputClickEnter', inputHeaderValue)
            setInputHeaderValue('');
        }
    };

    const openMenuAvatar = () => {
        setModalCart(false)
        setMenuAvatar(() => !menuAvatar)
    }

    const openModalCart = () => {
        setMenuAvatar(false);
        setModalCart(() => !modalCart)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {//ICONREF É UMA VAR CRIADA ACIMA            
            // Fecha o modal se estiver aberto e o clique não foi dentro do ícone ou do modal
            if (menuAvatar && iconRef.current && !iconRef.current.contains(event.target as Node)) {
                setMenuAvatar(false);
                setModalCart(false)
            }
        };

        // Adiciona o ouvinte de evento ao documento
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);

        // Remove o ouvinte de evento ao desmontar o componente
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.addEventListener("touchstart", handleClickOutside);
        };

    }, [menuAvatar]);//ISSO AKI INDICA PARA O USE EFECT ATUALIZAR TODA VEZ QUE ESSA VARIAVEL TIVER ALGUMA ALTERCAO


    const handleUpdateQuantity = (id?: string, quantity?: number) => {

        const product = productsCart

        // const newValue = value.map((item: any) => {
        //     if (item.id !== id) return item

        //     return { ...item, quantity: quantity }
        // })

        updateLocalStorage(productsCart)
    }

    return (
        <TagHeader>
            <Logo className={SairaStencil.className} href="/pages/list-products">Classifields</Logo>
            <ContainerSearchCartIconAvatar>
                <InputWithSearchIcon
                    placeholder="Procurando por algum produto especifico?"
                    digitedValue={handleAddValueInputPerDigit}
                    value={inputHeaderValue}

                    onKeyDown={clearInputClickEnterOrClickIconLoopa}
                    onClick={() => clearInputClickEnterOrClickIconLoopa({ key: 'Click' })}
                />
                <div ref={iconRef}>

                    <CartControlWithModal >
                        <div onClick={openModalCart}>
                            <CartControl />
                        </div>
                        {modalCart && <CartMenuModal />}
                    </CartControlWithModal>

                    <AvatarWithModal>
                        <Avatar src="/images/avatar.png" alt="Avatar" onClick={openMenuAvatar} />
                        {menuAvatar && <AvatarMenuModal />}
                    </AvatarWithModal>

                </div>
            </ContainerSearchCartIconAvatar>


        </TagHeader>

    )
}
