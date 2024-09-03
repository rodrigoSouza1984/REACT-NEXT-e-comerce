'use client';

import { useEffect } from "react";
import styled from "styled-components";

interface SelectsSizePMGandColorsProps {
    product: any;
    selectedSize: any;
    setSelectedSize: (size: any) => void;
    selectedColor: string;
    setSelectedColor: (color: string) => void;
}

const LineSelectsButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;  
    width: 100%;
    height: 100%;    
    gap: 10px;

    select {        
        text-align: center;
        width: 60%;
        border-radius: 6px;
        height: 100%;
        padding: 2px 10px;
    }
`;

export function SelectsSizePMGandColorsProps({ product, selectedSize, setSelectedSize, selectedColor, setSelectedColor }: SelectsSizePMGandColorsProps) {

    //Update colors based on selected size
    const selectedSizeObject = product.size.find(
        (sizeObj: any) => sizeObj.size === selectedSize
    );
    const colors = selectedSizeObject?.color || [];

    // Utilize useEffect para definir a cor selecionada após a renderização
    useEffect(() => {
        if (selectedColor === '' && colors.length > 0) {
            setSelectedColor(colors[0].color);
        }
    }, [selectedSize, colors, setSelectedColor]);


    return (
        <LineSelectsButtons>
            <select
                value={selectedSize}
                onChange={(e) => {
                    setSelectedSize(e.target.value);
                    setSelectedColor(""); // Reset color when size changes
                }}
            >
                {product.size.map((option: any, index: any) => (
                    <option key={index} value={option.size}>
                        {option.size.toUpperCase()}
                    </option>
                ))}
            </select>

            <select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                disabled={!colors.length} // Disable if no colors are available
            >
                {colors.map((option: any, index: any) => (
                    <option key={index} value={option.color}>
                        {option.color.toUpperCase()}
                    </option>
                ))}
            </select>
        </LineSelectsButtons>
    );
}