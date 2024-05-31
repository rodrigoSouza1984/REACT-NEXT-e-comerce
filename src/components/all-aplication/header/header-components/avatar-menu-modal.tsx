import { EnterIcon } from "@/components/icons/enter-icon";
import { ExitIcon } from "@/components/icons/exit-icon";
import { PersonRegisterIcon } from "@/components/icons/person-register";
import { useRouter } from "next/navigation";
import styled from "styled-components";

interface MenuModalProps {
}

const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    right: 0px; /* Posiciona o modal à direita */
    top: 100%; /* Posiciona o modal abaixo do Avatar */    
    padding: 10px; /* Estilo do modal */
    z-index: 999; /* Garante que o modal fique acima dos outros elementos */
    width: 200px;
    
    &::after {/* Triângulo na ponta direita do modal */
    content: '';
    position: absolute;
    top: -9px; /* Posiciona o triângulo acima do modal */
    right: 13px; /* Posiciona o triângulo à direita do modal */
    border-width: 10px; /* Tamanho do triângulo */
    border-style: solid;
    border-color: transparent transparent white transparent; /* Cores do triângulo */
    z-index: 997;      
    filter: drop-shadow(0px 1.5px 0.7px rgba(0, 0, 0, 0.9)); /* Adiciona uma sombra alternativa *//* Adiciona sombra ao triângulo */  
}   
`


const MenuItem = styled.ul`    
    background: #FFFFFF;
    width: 250px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 12px 16px;
    z-index: 999;

    list-style: none;

    top: 100%;

    li {
        color: var(--text-dark);
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        cursor: pointer;        
        
        >div {/* div para containezar o  nome e o icone do item */            
            display: flex;
            flex-direction: row;
            align-items: end;
            justify-content: space-between;
            width: 100%;                       
            
            >div {/* div para containezar e controlar tamnho do icone svg*/                  
                height: 17px;
                width: 35px;               

                svg {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

    li + li {   //aki so coloca marginto se tiver um item lista sobre o item lista o 1 por exemplo nao coloca
        margin-top: 6px;
    }
`


export function AvatarMenuModal(props: MenuModalProps) {

    const router = useRouter();

    const handleNavigate = (routerUrl: string) => {
        router.push(routerUrl)
    }

    return (
        <MenuContainer>
            <MenuItem>

                <li>
                    <div onClick={() => handleNavigate('/')}>
                        Entrar
                        <div>
                            <EnterIcon />
                        </div>
                    </div>
                </li>

                <li>
                    <div onClick={() => handleNavigate('/')}>
                        Cadastrar
                        <div>
                            <PersonRegisterIcon />
                        </div>

                    </div>
                </li>

                <li>
                    <div onClick={() => handleNavigate('/')}>
                        Sair
                        <div>
                            <ExitIcon />
                        </div>
                    </div>
                </li>

            </MenuItem>
        </MenuContainer>
    )
}


