"use client"

import styled, { ThemeContext } from "styled-components"

import SwiperCore from 'swiper';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper,SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import React, { useContext } from "react";
//import { theme } from "../default-components/default-providers";


// //https://swiperjs.com/demos

interface SliderComponentProps {
    images: any[]; // Lista de URLs das imagens
    onSlideClick: (data: any) => void;    
}

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;

  .swiper-button-prev,
  .swiper-button-next {
    color: white; /* Altera a cor das setas */ 
    pointer-events: auto; /* Mantém o evento de clique habilitado nas setas */
    //pointer-events: none;/* Desabilita o evento de clique nas setas */      
  }
  
.swiper-button-prev:after, .swiper-button-next:after { 
    font-size: 25px;      
    //background-color: RED;  //cor background do container das seta                        
}

  .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    background: #fff;    
  }  
`

SwiperCore.use([Navigation, Pagination, Autoplay]);

export function SliderComponent({ images, onSlideClick }: SliderComponentProps) {      
     
    return (        
        
        <StyledSwiper
            spaceBetween={0}
            slidesPerView={1}            
            //centeredSlides={true}  
            
            breakpoints={{
                // when window width is >= 640px
                370: {
                  //width: 370,
                  slidesPerView: 2,
                },
                // when window width is >= 768px
                540: {
                  //width: 540,
                  slidesPerView: 3,
                }                
              }}

            initialSlide={0} // Começa a partir do primeiro slide                    
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            className="mySwiper"
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <img src={image.image_url} alt={`Imagem ${index + 1}`} onClick={() => onSlideClick(image)} />
                </SwiperSlide>
            ))}

        </StyledSwiper>
    )
}


