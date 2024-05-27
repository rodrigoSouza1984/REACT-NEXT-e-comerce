"use client"

import styled from "styled-components"

export const DefaultContainerControlMaxWidthPage = styled.div`
    display: flex;
    flex-direction: column;  
    align-items: center;  
    width: 100%;   
    padding: 10px 10px;  
    //background-color: blue;
    background-color: var(--custom-purple-classifield);
    height: 100%;   
    
    @media (min-width: ${props => props.theme.celPhoneBreakPoint}){//aki
        width: 80%;
        //background-color: green; 
    }

    @media (min-width: ${props => props.theme.tabletBreakPoint}){//aki
        width: 75%;
        //background-color: red; 
    }

    @media (min-width: ${props => props.theme.desktopBreakpoint}){//aki
        width: 70%;
        //background-color: gray;       
    }
`



