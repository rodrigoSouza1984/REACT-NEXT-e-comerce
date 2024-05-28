import { SearchIcon } from "@/components/icons/search-icon";
import { InputHTMLAttributes } from "react";
import styled from "styled-components";


interface InputWithSearchIconProps extends InputHTMLAttributes<HTMLInputElement> { }

const InputContainer = styled.div`
    position: relative;
    width: 220px;    

    svg {
        position: absolute;
        right: 25px;
        top: 50%;
        transform: translateY(-50%); 
        
        @media (max-width: ${props => props.theme.celPhoneBreakPoint}){//aki
            height: 18px;
            right: 12px;       
        }
    }    

    /* @media (min-width: ${props => props.theme.tabletBreakPoint}){
        width: 352px;//aki
        margin-right: 10px;
        font-size: 14px;
    } */
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

    @media (min-width: ${props => props.theme.celPhoneBreakPoint}){//aki
        width: 220px;   
        height: 40px;   
        font-size: 10px;       
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
