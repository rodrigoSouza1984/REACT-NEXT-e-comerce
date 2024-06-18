"use client"

import styled from "styled-components"
import { MenuCategoryProps } from "./left-bar/menu-categorys"
import { useEffect, useState, useRef } from "react"
import { FilterByTypeMenuCategorysIcon } from "./left-bar/filter-and-menu-categorys-icone-sanduich"
import { PriorityFiltersProducts } from "./right-bar/priority-filters-products-modal"


interface FilterAndMenuCategorysBarProps {

}

const TagHeaderFilterMenu = styled.header`
    display: flex;    
    align-items: start;
    flex-direction: column;
    justify-content: center;  
    background-color: var(--custom-purple-classifield);    
    width: 100%;
    height: 100%;
    padding: 10px 0px;
    background-color: rgba(173, 216, 230, 0.1);         

    @media (min-width: ${props => props.theme.celPhoneBreakPoint}){//aki        
        padding: 10px 13px;         
    }
    
    @media (min-width: ${props => props.theme.smallerTabletBreakPoint}){//aki      
        padding: 10px 18px;        
    }

    @media (min-width: ${props => props.theme.tabletBreakPoint}){//aki       
        padding: 10px 18px;         
    }

    @media (min-width: ${props => props.theme.desktopBreakpoint}){//aki     
        padding: 20px 23px;             
    }

`

const Container = styled.div`
    display: flex;    
    align-items: center;
    flex-direction: row;
    justify-content: start; 
    width: 100%; 
    height: 20px;       
`

const ContainerWrapper = styled.div`
  position: relative;
  width: 70%;
  height: 100%;
  display: flex;  
  margin: 0; 
  padding: 0px 0px;
  //background-color: red;
`;

const ContainerLeft = styled.div`
    display: flex;    
    align-items: center;
    flex-direction: row;
    justify-content: start; 
    width: 90%; 
    height:100% ;
    overflow-y: auto; /* Adiciona o scroll horizontal */
    white-space: nowrap; /* Garante que os itens fiquem na mesma linha */
    //background-color: red;

    /* Esconde a barra de rolagem em navegadores Webkit */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Esconde a barra de rolagem no Firefox */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */      
`

const Arrow = styled.div`
  position: absolute;
  top: 50%; 
  transform: translateY(-50%);
  cursor: pointer;
  background-color: rgba(173, 216, 230, 0.1) ;
  color: white;
  padding: 10px;
  height: 100%;  
  user-select: none;
  z-index: 1; 
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 5px;  
`;

const ArrowLeft = styled(Arrow)`
  right: 0;  
  padding-bottom: 10px;
`;

const ArrowRight = styled(Arrow)`
  right: 0; 
  padding-bottom: 10px;    
`;


const ContainerFilterItensInBar = styled.div`
    display: none;      

    @media (min-width: ${props => props.theme.celPhoneBreakPointSmaller}){//aki
        width: 100%;        
        display: flex;    
        align-items: center;
        flex-direction: row;
        justify-content: start;
    }      
`

const ContainerIconMenu = styled.div`
    display: block; 

    @media (min-width: ${props => props.theme.celPhoneBreakPointSmaller}){//aki
        display: none;
    }
`

const ContainerRight = styled.div`     
    display: flex;    
    align-items: center;
    flex-direction: row;
    justify-content: end; 
    width: 50%; 
    height:5px ;    
    //background-color:green;    
`

export function FilterAndMenuCategorysBar(props: FilterAndMenuCategorysBarProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const handleScroll = () => {
        if (containerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 1);
        }
    };

    const scrollLeft = () => {
        handleScroll()
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: -100, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        handleScroll()
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: 100, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        handleScroll(); // Initial check        
    }, []);


    return (
        <TagHeaderFilterMenu>

            <Container>

                <ContainerIconMenu>
                    <FilterByTypeMenuCategorysIcon />
                </ContainerIconMenu>

                <ContainerWrapper>

                    <ContainerLeft ref={containerRef} onScroll={handleScroll}>

                        <ContainerFilterItensInBar>
                            <MenuCategoryProps />
                        </ContainerFilterItensInBar>

                    </ContainerLeft>

                    {(showRightArrow && !showLeftArrow) && <ArrowRight onClick={scrollRight}>{'>'}</ArrowRight>}
                    {(showLeftArrow && !showRightArrow) && <ArrowLeft onClick={scrollLeft}>{'<'}</ArrowLeft>}

                    {(showRightArrow && showLeftArrow) && <ArrowRight onClick={scrollRight}>{'>'}</ArrowRight>}

                </ContainerWrapper>

                <ContainerRight>
                    <PriorityFiltersProducts/>
                </ContainerRight>

            </Container>

        </TagHeaderFilterMenu>
    )
}
