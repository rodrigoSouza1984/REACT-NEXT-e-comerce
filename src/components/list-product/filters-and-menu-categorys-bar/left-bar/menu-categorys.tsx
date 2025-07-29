import { useCategorysFilter } from "@/hooks/products/use-categorys-context";
import { filterItemsCategorysData } from "@/types/filter-types-categorys-list";
import styled from "styled-components"

interface MenuCategoryProps {
    selected: boolean
}

const FilterList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    list-style: none; //remove as bolinhas de lista

    @media (min-width: ${props => props.theme.tabletBreakPoint}){//aki
        gap: 40px;
    }
`

const FilterItem = styled.li<MenuCategoryProps>`
    font-family: inherit;
    font-weight: 600;
    font-size: 8px;
    line-height: 16px;
    text-align: center;
    text-transform: uppercase;
    color: white;
    padding: 5px 7px;   

    //border-bottom: ${props => props.selected ? '4px solid var(--orange-low)' : ''};
    background-color: ${props => props.selected ? 'rgba(173, 216, 230, 0.1)' : ''};

    // Adicione o efeito hover
    &:hover {        
        background-color: rgba(173, 216, 230, 0.1); // lightblue com opacidade
        cursor: pointer; // O cursor se transforma em uma mãozinha para indicar que o item é clicável
    }
    

    @media (min-width: ${props => props.theme.celPhoneBreakPoint}){//aki
        font-size: 12px;
    }
    
    @media (min-width: ${props => props.theme.smallerTabletBreakPoint}){//aki
        font-size: 12px;
    }

    @media (min-width: ${props => props.theme.tabletBreakPoint}){//aki
        font-size: 12px;
        line-height: 18px; 
    }

    @media (min-width: ${props => props.theme.desktopBreakpoint}){//aki     
        font-size: 18px;
        line-height: 22px;      
    }
`

export function MenuCategoryProps() {   

    const { categoryType, setCategoryType } = useCategorysFilter()

    const handleChangeItem = (data: any) => {
        setCategoryType(data)   
    }    

    return (
        <FilterList>
            {filterItemsCategorysData.map(item => (
                <FilterItem
                    key={item.type}
                    selected={categoryType === item.type}
                    onClick={() => handleChangeItem(item.type)}
                >
                    {item.text}
                </FilterItem>
            ))}
        </FilterList>
    )
}
