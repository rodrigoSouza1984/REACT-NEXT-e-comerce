"use client"

import { Saira_Stencil_One } from "next/font/google";
import styled from "styled-components"
import { InputWithSearchIcon } from "./header-components/input-with-search-icon";
import { CartControl } from "./header-components/cart-control-with-badge";
import { Avatar } from "./header-components/avatar";

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
    font-weight: 400;
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

export function Header(props: HeaderProps) {
    return (
        <TagHeader>            
            <Logo className={SairaStencil.className} href="/pages/list-products">Classifields</Logo>
            <ContainerSearchCartIconAvatar>
                <InputWithSearchIcon placeholder="Procurando por algo especifico?" />
                <div>
                    <CartControl />
                    <Avatar src="/images/avatar.png" alt="Avatar" /> 
                </div>
            </ContainerSearchCartIconAvatar>
        </TagHeader>
    )
}
