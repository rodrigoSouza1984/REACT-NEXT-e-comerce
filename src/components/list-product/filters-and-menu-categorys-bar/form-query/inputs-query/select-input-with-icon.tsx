"use client"

import { HouseIcon } from "@/components/icons/house-icon";
import { useFormContext } from "react-hook-form";
import styled from "styled-components"

interface SelectInputWithIconProps {

}

const SelectContainer = styled.div`
    position: relative;
    width: 100%; /* Ajuste a largura para acomodar o ícone */

    display: flex;
    align-items: center;   
`

const StyledSelect = styled.select`
    width: 100%;
    border-radius: 8px;
    padding: 1px 28px;
    border: 1px solid var(--custom-purple-classifield);
    background-color: var(--background-secondary);
    font-family: inherit;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--custom-purple-classifield);
    height: 30px;    

    option {
        color: var(--custom-purple-classifield);        
    }    

    &:hover {        
        background-color: rgba(173, 216, 230, 0.2); // cor do icone quando passa mouse por cima com opacaidade
        cursor: pointer; // O cursor se transforma em uma mãozinha para indicar que o item é clicável
    }
    
`;


const IconWrapperContainer = styled.div`
    position: absolute;    
    left: 10px;
    pointer-events: none; /* Para não interferir na interação com o select */
    display: flex;
    align-items: center;     

    svg{
        stroke: var(--custom-purple-classifield); /* Ajuste a cor do ícone conforme necessário */
        height: 15px;
        width: 15px;
    }
`;


export function SelectInputWithIcon() {
    const { register } = useFormContext();

    return (
        <SelectContainer>
            <StyledSelect id="imovelType" {...register('imovelType')}>
                <option value="" style={{ color: 'var(--custom-purple-classifield-with-opacity)' }}>
                    Selecione o tipo de imóvel
                </option>
                <option value="casa">Casa</option>
                <option value="chacara">Chácara</option>
                <option value="apartamento">Apartamento</option>
                <option value="galpao">Galpão</option>
            </StyledSelect>

            <IconWrapperContainer>
                <HouseIcon />
            </IconWrapperContainer>
        </SelectContainer>
    )
}
