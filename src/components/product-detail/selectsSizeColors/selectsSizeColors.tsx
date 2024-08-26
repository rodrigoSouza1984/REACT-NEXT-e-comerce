'use client';

import styled from "styled-components";

interface ProductSelectsProps {
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

export function ProductSelects({ product, selectedSize, setSelectedSize, selectedColor, setSelectedColor }: ProductSelectsProps) {

    const selectedSizeObject = product.size.find(
        (sizeObj: any) => {
            console.log(selectedSize, 99999999)
            if(sizeObj.size && sizeObj.size !== ''){
                sizeObj.size === selectedSize
            }else if(sizeObj.width_in_centimeters){
                sizeObj.width_in_centimeters === selectedSize
            }
            
        }
    );
    const colors = selectedSizeObject?.color || [];

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
                    <option key={index} value={option.size !== '' ? option.size : {width_in_centimeters : option.width_in_centimeters, height_in_centimeters : option.height_in_centimeters, depth_in_centimeters : option.depth_in_centimeters}}>
                        {option.size ?
                            option.size.toUpperCase() :
                            `${option.width_in_centimeters}x${option.height_in_centimeters}x${option.depth_in_centimeters}`
                        }
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