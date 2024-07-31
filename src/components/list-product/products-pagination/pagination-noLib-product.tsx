import styled from "styled-components";

interface PaginationNoLibProductProps {
    totalPages: number,
    quantityItensByPage: number,
    page: number,
    currentPage: number,
    handleClick: (pageNumber: number) => void;
}


const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;  
  background-color: var(--background-easy-gray);
  width: 100%;
  padding: 5px 5px;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 0;  
`;

const NavButtonAnterior = styled.button`
  padding: 5px 10px;
  border: none;
  background-color: transparent;
  color: blue;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  display: flex; /* Adiciona flexbox ao botão */
  justify-content: end; /* Centraliza o conteúdo horizontalmente */
  align-items: center; /* Centraliza o conteúdo verticalmente */
  text-align: center; /* Garante que o texto esteja centralizado */
  opacity: ${props => (props.disabled ? '0.5' : '1')};
  
  &:hover {
    text-decoration: ${props => (props.disabled ? 'none' : 'underline')};
  }
`;

const NavButtonProximo = styled.button`
  padding: 5px 10px;
  border: none;
  background-color: transparent;
  color: blue;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  display: flex; /* Adiciona flexbox ao botão */
  justify-content: start; /* Centraliza o conteúdo horizontalmente */
  align-items: center; /* Centraliza o conteúdo verticalmente */
  text-align: center; /* Garante que o texto esteja centralizado */
  opacity: ${props => (props.disabled ? '0.5' : '1')};
  
  &:hover {
    text-decoration: ${props => (props.disabled ? 'none' : 'underline')};
  }
`;

const PageIndicator = styled.span`
    display: flex; 
    margin: 0px 10px;
    font-size: 16px;
    flex-shrink: 0;

    >div{
        display: flex; 
        justify-content: center; /* Centraliza o conteúdo horizontalmente */
        align-items: center; /* Centraliza o conteúdo verticalmente */
        text-align: center; 
        background-color: var(--custom-purple-classifield-with-opacity);
        margin-right: 3px;
        width: 10px;
        padding:0 15px ;
        border-radius: 5px;
    }
`;

export function PaginationNoLibProduct({handleClick, currentPage, totalPages}: PaginationNoLibProductProps) {    

    return (
        <Pagination>


            <NavButtonAnterior onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1}>
                &lt; Anterior
            </NavButtonAnterior>


            <PageIndicator><div>{currentPage}</div> de {totalPages}</PageIndicator>


            <NavButtonProximo onClick={() => handleClick(currentPage + 1)} disabled={currentPage === totalPages}>
                Seguinte &gt;
            </NavButtonProximo>


        </Pagination>
    )
}