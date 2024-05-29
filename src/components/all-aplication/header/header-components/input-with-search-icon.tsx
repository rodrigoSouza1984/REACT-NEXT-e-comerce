import { SearchIcon } from "@/components/icons/search-icon";
import { InputHTMLAttributes } from "react";
import styled from "styled-components";


interface InputWithSearchIconProps extends InputHTMLAttributes<HTMLInputElement> { }

const InputContainer = styled.div`
    position: relative;
    width: 220px;   
    margin-left:0;
    margin-right: 0;

    svg {
        position: absolute;
        right: 25px;
        top: 50%;
        transform: translateY(-50%); 
        height: 18px;
        right: 10px; 
        
        @media (min-width: ${props => props.theme.celPhoneBreakPoint}){//aki
            height: 16px;
            right: 15px;       
        }

        @media (min-width: ${props => props.theme.smallerTabletBreakPoint}){//aki
            height: 18px;
            right: 25px;
        }     

        @media (min-width: ${props => props.theme.tabletBreakPoint}){//aki
            height: 24px;
            right: 24px;  
        }

        @media (min-width: ${props => props.theme.desktopBreakpoint}){//aki
            height: 24px;
            right: 24px;     
        }
    }   

`


const PrimaryInput = styled.input`
    width: 200px;
    border-radius: 8px;
    padding: 10px 16px;
    border: 1px solid var(--custom-purple-classifield); // Adiciona borda com grossura e cor
    background-color: var(--background-secondary);

    font-family: inherit;//inherity pega a font do component pai mais proximo configutrado
    font-weight: 400;
    font-size: 8px;
    line-height: 22px;
    color: var(--text-dark);
    height: 30px;   
    margin-right: 8px;
    margin-left: 8px; 

    @media (min-width: ${props => props.theme.celPhoneBreakPoint}){//aki
        width: 200px;   
        height: 30px;   
        font-size: 10px; 
        margin-right: 14px;       
    }
    
    @media (min-width: ${props => props.theme.smallerTabletBreakPoint}){//aki
        width: 260px;   
        height: 40px;   
        font-size: 14px;       
        //background-color:blue ;
    }     

    @media (min-width: ${props => props.theme.tabletBreakPoint}){//aki
        width: 352px;
        height: 40px;
        margin-right: 10px;
        font-size: 14px;     
        //background-color:red ;   
    }

    @media (min-width: ${props => props.theme.desktopBreakpoint}){//aki
        width: 400px; 
        height: 40px; 
        //background-color:yellow ;      
    }
`


export function InputWithSearchIcon(props: InputWithSearchIconProps) {
    return (
        <InputContainer>
            <PrimaryInput {...props} />
            <SearchIcon />
        </InputContainer>

    )
}
