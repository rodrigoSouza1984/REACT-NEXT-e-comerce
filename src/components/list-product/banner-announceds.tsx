"use client"

import styled from "styled-components"
import { SliderComponent } from "../slider-component.tsx/slider-component";
import { listSlide } from "@/api/database-mock/slider-list-images";

//https://swiperjs.com/demos

interface BannerAnnouncedsProps {
}

const MainContainer = styled.header`
    display: flex;    
    align-items: start;
    flex-direction: column;
    justify-content: center;  
    background-color: var(--custom-purple-classifield);    
    width: 100%;
    height: 100%;       
`

const Container = styled.div`
    display: flex;    
    align-items: center;
    flex-direction: row;
    justify-content: start; 
    width: 100%; 
    height: 130px;
    margin-top: 0px;    

    @media (min-width: ${props => props.theme.celPhoneBreakPoint}){//aki
        height: 130px; 
    }
    
    @media (min-width: ${props => props.theme.smallerTabletBreakPoint}){//aki
        height: 150px; 
    }

    @media (min-width: ${props => props.theme.tabletBreakPoint}){//aki
        height: 150px; 
    }

    @media (min-width: ${props => props.theme.desktopBreakpoint}){//aki
        height: 220px;      
    }
`


export function BannerAnnounceds(props: BannerAnnouncedsProps) {

    const imagesBannerSlide = listSlide

    const handleClick = (image: any) => {
        console.log('click ok', 99998, image)
    };      

    return (
        <MainContainer>
            <Container>
                <SliderComponent images={imagesBannerSlide} onSlideClick={(data : any) => handleClick(data)}/>
            </Container>
        </MainContainer>
    )
}




