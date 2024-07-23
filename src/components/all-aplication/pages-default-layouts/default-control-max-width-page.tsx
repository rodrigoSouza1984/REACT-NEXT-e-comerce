"use client"

import styled from "styled-components"

export const DefaultContainerControlMaxWidthPage = styled.div`
    display: flex;
    flex-direction: column;  
    align-items: center;  
    width: 100%;   
    padding: 15px 15px;    
    background-color: var(--custom-purple-classifield);    
    min-height: 100vh;
    height: auto; /* Permite que o contêiner cresça conforme necessário */

    //parte overflow ate scrollbar-with eh para o background sempre ir ateh o final do heigth tem que ter
    overflow-y: auto; /* Adiciona barra de rolagem se o conteúdo exceder a altura da tela */
    /* Esconde a barra de rolagem */
    &::-webkit-scrollbar {
        width: 0;
        height: 0;
    }
    -ms-overflow-style: none; /* IE e Edge */
    scrollbar-width: none; /* Firefox */

    @media (min-width: ${props => props.theme.celPhoneBreakPointSmaller}){//aki
        width: 100%;  
        //padding: 10px 20px;
        //background-color: blue; 
    }
    
    @media (min-width: ${props => props.theme.celPhoneBreakPoint}){//aki
        width: 80%;
        //padding: 10px 20px;
        //background-color: orange; 
    }
    
    @media (min-width: ${props => props.theme.smallerTabletBreakPoint}){//aki
        width: 80%;
        //padding: 10px 20px;
        //background-color: green; 
    }

    @media (min-width: ${props => props.theme.tabletBreakPoint}){//aki
        width: 75%;
        //padding: 10px 20px;
        //background-color: red; 
    }

    @media (min-width: ${props => props.theme.desktopBreakpoint}){//aki
        width: 70%;
        //padding: 10px 20px;
        //background-color: gray;       
    }
`



