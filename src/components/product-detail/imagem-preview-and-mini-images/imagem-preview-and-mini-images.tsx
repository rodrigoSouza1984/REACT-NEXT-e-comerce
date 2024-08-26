"use client"

import { useState } from "react"
import styled from "styled-components"

interface ImagemPreviewAndMiniImagesProps {
    images: any[]
}

const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;

@media (min-width: ${props => props.theme.celPhoneBreakPoint}){//aki 
                max-width: 640px;           
                width: 180%;             
            }  
`

const ContainersImagesPrteview = styled.div`
    height: 80px;
    width: 100%;   
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: row;
    overflow-y: hidden;
    overflow-x: auto; /* Adiciona barra de rolagem horizontal */
    padding-top: 5px;

    .thumbnail-image {
        width: 20%; /* Ajuste a largura conforme necessário */
        //margin-left: 3px; /* Adiciona margem entre as miniaturas */
        border-radius: 8px; /* Adiciona bordas arredondadas */  
        border: 1px solid white; /* Adiciona borda branca */      
    }

    .thumbnail-image:not(:first-child) {
        margin-left: 5px; /* Adiciona margem entre as miniaturas, exceto a primeira */
    }
`

export function ImagemPreviewAndMiniImages(props: ImagemPreviewAndMiniImagesProps) {
    const [imageMainDiv, setImageMainDiv] = useState(props.images[0].image_url)

    const handleImageClick = (imageUrl: string) => {
        setImageMainDiv(imageUrl);
    };

    return (
        <Container>
            <img src={imageMainDiv} />
            <ContainersImagesPrteview>
                {props.images?.map((image: any, index: any) => (
                    <img key={index}
                        src={image.image_url}
                        alt={`Miniatura ${index + 1}`}
                        className="thumbnail-image"
                        onClick={() => handleImageClick(image.image_url)}
                    />
                ))}
            </ContainersImagesPrteview>
        </Container>
    )
}