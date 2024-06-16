"use client"

import styled from "styled-components"

export const DefaultContainerControlMaxWidthPage = styled.div`
    display: flex;
    flex-direction: column;  
    align-items: center;  
    width: 100%;   
    padding: 5px 5px;    
    background-color: var(--custom-purple-classifield);
    height: 100%;  
    
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



