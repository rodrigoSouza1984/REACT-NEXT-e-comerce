import { ArrowIcon } from "@/components/icons/arrow-icon";
import { useFiltersContext } from "@/hooks/products/use-filters-contexts";
import { useEffect, useRef, useState } from "react"
import styled from "styled-components"



interface PriorityFiltersProductsProps {
    selected?: boolean
    onClick?: () => void;
}

const FilterContainer = styled.div`
    
    display: flex;
    align-items: center;
    position: relative;

    >div {
        display: flex;
        align-items: center;
        position: relative;
        

        button {
        border: none;
        background: transparent;
        cursor: pointer;
        font-family: inherit;
        font-weight: 400;
        font-size: 10px;        
        color: white;

        display: flex;
        align-items: center;
        justify-content: center;  
        padding: 3px 5px;
        //background-color: green;

        @media (min-width: ${props => props.theme.celPhoneBreakPoint}){//aki
        font-size: 12px;
        //background-color: yellow
        }

        @media (min-width: ${props => props.theme.tabletBreakPoint}){//aki
        font-size: 12px;
        //background-color: gray
        } 

        @media (min-width: ${props => props.theme.desktopBreakpoint}){//aki
        font-size: 14px;        
        }                 
    }
        
        svg {        
            width: 35px;
            height: 35px;            
        }              
    }

    &:hover {        
            background-color: rgba(173, 216, 230, 0.1); // lightblue com opacidade
        cursor: pointer; // O cursor se transforma em uma mãozinha para indicar que o item é clicável
    }
    
`

const PriorityFilter = styled.ul`    
    position: absolute;
    background: #FFFFFF;
    width: 250px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 12px 16px;
    z-index: 999;
    
    list-style: none;

    top: 130%;
    right: 10px;
    width: 170px;   

    li + li {   //aki so coloca marginto se tiver um item lista sobre o item lista o 1 por exemplo nao coloca
        margin-top: 4px;
    }

    /* Triângulo na ponta direita do modal */
    &::after {
    content: '';
    position: absolute;
    top: -15px; /* Posiciona o triângulo acima do modal */
    right: 0.5px; /* Posiciona o triângulo à direita do modal */
    border-width: 10px; /* Tamanho do triângulo */
    border-style: solid;
    border-color: transparent transparent white transparent; /* Cores do triângulo */
    z-index: 997;      
    //filter: drop-shadow(0px 1.5px 0.7px rgba(0, 0, 0, 0.9)); /* Adiciona uma sombra alternativa *//* Adiciona sombra ao triângulo */  
    }  
`

const FilterItem = styled.li<PriorityFiltersProductsProps>`   
    color: var(--text-dark);
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    padding: 3px 9px;
    background-color: ${props => props.selected ? 'rgba(173, 216, 230, 0.2)' : ''};

    &:hover {        
        background-color: rgba(173, 216, 230, 0.2); // cor do icone quando passa mouse por cima com opacaidade
        cursor: pointer; // O cursor se transforma em uma mãozinha para indicar que o item é clicável
    }
`


export function PriorityFiltersProducts(props: PriorityFiltersProductsProps) {

    const [isOpen, setIsOpen] = useState(false)    

    const { priorityFilter, setPriorityFilter } = useFiltersContext();

    const iconRef = useRef<HTMLDivElement>(null);

    const handleOpen = () => setIsOpen(prev => !prev)

    const handleChangeItem = (data: any) => {
        console.log(data, 9999, data)
        setPriorityFilter(data)

        setTimeout(() => {
            handleOpen()
        }, 200)
    }


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {            
            // Fecha o modal se estiver aberto e o clique não foi dentro do ícone ou do modal
            if (isOpen && iconRef.current && !iconRef.current.contains(event.target as Node)) {
                setIsOpen(false);
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
    }, [isOpen]);

    return (
        <FilterContainer ref={iconRef}>
            <div onClick={handleOpen}>
                <button >
                    Organizar por
                </button>
                <ArrowIcon />
            </div>


            {isOpen ? <PriorityFilter>
                <FilterItem selected={priorityFilter === 'news'} onClick={() => handleChangeItem('news')}> Novidades </FilterItem>
                <FilterItem selected={priorityFilter === 'biggest price'} onClick={() => handleChangeItem('biggest price')}> Preço: Maior - Menor </FilterItem>
                <FilterItem selected={priorityFilter === 'minor price'} onClick={() => handleChangeItem('minor price')}> Preço: Menor - Maior </FilterItem>
                <FilterItem selected={priorityFilter === 'popularity'} onClick={() => handleChangeItem('popularity')}> Mais vendidos </FilterItem>
            </PriorityFilter> : ''}

        </FilterContainer>
    )
}