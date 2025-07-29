"use client"

import { BackBtn } from "@/components/back-button/back-button";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: start;
    flex-direction: column;
    padding-top: 5px; 
    height:100%;
`

export default function CartPage() {
    return (
        <Container>
            <BackBtn navigate="/" />
            <p>Em Construção.</p>
        </Container>
    );
}