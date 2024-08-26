import styled from "styled-components";
import { useRouter } from "next/navigation";//tem que importar desse navigation e nao do router
import { SetaVoltarIcon } from "../icons/seta-voltar-icon";

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: transparent;
    border: none;
    cursor: pointer;

    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: var(--secoundary-text);
    color: white;    
`

interface BtnProps {
    navigate: string;
}


export function BackBtn({ navigate }: BtnProps) {
    const router = useRouter();

    const handleNavigate = () => {
        router.push(navigate)
    }

    return (
        <Button onClick={handleNavigate}>
            <SetaVoltarIcon />
            voltar
        </Button>
    )
}