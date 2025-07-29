import { MenuIcon } from "@/components/icons/menu-icon"
import { useCategorysFilter } from "@/hooks/products/use-categorys-context"
import { filterItemsCategorysData } from "@/types/filter-types-categorys-list"
import { useEffect, useRef, useState } from "react"
import styled from "styled-components"

interface FilterByTypeMenuCategorysIconProps {
    selected?: boolean
}

const FilterContainer = styled.div`    
    display: flex;
    align-items: center;
    position: relative;   

    button {
        border: none;
        background: transparent;
        cursor: pointer;
        font-family: inherit;
        font-weight: 400;
        font-size: 12px;        
        color: white;

        display: flex;
        align-items: center;
        justify-content: center;  
        padding: 3px 5px;

        &:hover {        
        background-color: rgba(173, 216, 230, 0.1); // lightblue com opacidade
        cursor: pointer; // O cursor se transforma em uma mãozinha para indicar que o item é clicável
    }
        
        svg {        
            width: 30px;
            height: 20px;            
        }

        @media (min-width: ${props => props.theme.desktopBreakpoint}){//aki
        font-size: 14px;
        }        
    }
`

const CategoryItemContainer = styled.ul`    
    position: absolute;
    background: #FFFFFF;
    width: 250px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 12px 16px;
    z-index: 999;
    
    list-style: none;

    top: 120%;
    left: 12px;
    width: 170px;   

    li + li {   //aki so coloca marginto se tiver um item lista sobre o item lista o 1 por exemplo nao coloca
        margin-top: 4px;
    }

    /* Triângulo na ponta direita do modal */
    &::after {
    content: '';
    position: absolute;
    top: -15px; /* Posiciona o triângulo acima do modal */
    left: 0.5px; /* Posiciona o triângulo à direita do modal */
    border-width: 10px; /* Tamanho do triângulo */
    border-style: solid;
    border-color: transparent transparent white transparent; /* Cores do triângulo */
    z-index: 997;      
    //filter: drop-shadow(0px 1.5px 0.7px rgba(0, 0, 0, 0.9)); /* Adiciona uma sombra alternativa *//* Adiciona sombra ao triângulo */  
    }
`

const CategoryItem = styled.li<FilterByTypeMenuCategorysIconProps>`   
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


export function FilterByTypeMenuCategorysIcon(props: FilterByTypeMenuCategorysIconProps) {
    const [isOpen, setIsOpen] = useState(false)   
    const iconRef = useRef<HTMLDivElement>(null);

    const handleOpen = () => {
        setIsOpen(prev => !prev)
        console.log(isOpen, '9999')
    }

    const { categoryType, setCategoryType } = useCategorysFilter()   

    const handleChangeItem = (data: any) => {
        console.log(data, 9999, data)
        setCategoryType(data)

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
            <button onClick={handleOpen}>
                <MenuIcon />
            </button>

            {isOpen ? <CategoryItemContainer >
                {filterItemsCategorysData.map(item => (
                    <CategoryItem
                        key={item.type}
                        selected={categoryType === item.type}
                        onClick={() => handleChangeItem(item.type)}
                    >
                        {item.text}
                    </CategoryItem>
                ))}
            </CategoryItemContainer> : ''}

        </FilterContainer>
    )
}