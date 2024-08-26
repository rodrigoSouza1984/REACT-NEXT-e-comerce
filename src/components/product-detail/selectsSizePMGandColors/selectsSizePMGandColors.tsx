'use client';

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
    padding: 0 10px;
    width: 100%;
    height: 25px;    
    gap: 10px;

    select {
        width: 100%;
        border-radius: 6px;
        height: 100%;
        padding: 2px;
    }
`;

export function SelectsSizePMGandColorsProps({ product, selectedSize, setSelectedSize, selectedColor, setSelectedColor }: SelectsSizePMGandColorsProps) {

    //Update colors based on selected size
    const selectedSizeObject = product.size.find(
        (sizeObj: any) => sizeObj.size === selectedSize
    );
    const colors = selectedSizeObject?.color || [];

    if (selectedColor === '') {
        setSelectedColor(selectedSizeObject?.color[0].color)
    }


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