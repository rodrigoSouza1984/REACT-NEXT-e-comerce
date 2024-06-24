"use client";

import { formatPrice } from "@/utils/formatted-price";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";

interface ValuesRangeInputProps {
  name: string;
  label: string;
  value: string;
}

// Novo componente RangeInputComponent
const RangeContainer = styled.div`
  display: flex;
  justify-content: start;
  gap: 10px;  
  margin-bottom: 10px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;  
  font-size: 10px;
  color: var(--custom-purple-classifield);
  height: 30px;  
  width: 100%;    

  >div{
    width: 100%;    
    font-size: 10px;    
  }
`;

const TextInput = styled.input`
  min-width: 85px;
  max-width: 85px;
  padding: 5px;
  border: 1px solid var(--custom-purple-classifield);
  border-radius: 6px;
  font-size: 10px;  
  color: var(--custom-purple-classifield);  
  height: 30px;
  background-color: var(--background-secondary);

  &::placeholder {
        color: var(--custom-purple-classifield); /* Define a cor do placeholder */
    }

    &::-webkit-input-placeholder {
        color: var(--custom-purple-classifield); /* Chrome, Safari, Opera */
    }

    &::-moz-placeholder {
        color: var(--custom-purple-classifield); /* Firefox 19+ */
    }

    &:-ms-input-placeholder {
        color: var(--custom-purple-classifield); /* Internet Explorer 10+ */
    }

    &:-moz-placeholder {
        color: var(--custom-purple-classifield); /* Firefox 18- */
    }
`;

export default function ValuesRangeInput() {
  const { setValue, watch } = useFormContext();

  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");

  // Atualiza os valores formatados conforme o usuário digita
  useEffect(() => {
    const min = watch("priceMin");
    if (min !== undefined) {
      setPriceMin(formatPrice(Number(min)));
    }
  }, [watch("priceMin")]);

  useEffect(() => {
    const max = watch("priceMax");
    if (max !== undefined) {
      setPriceMax(formatPrice(Number(max)));
    }
  }, [watch("priceMax")]);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setValue("priceMin", value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setValue("priceMax", value);
  };

  return (
    <RangeContainer>
      
      <InputWrapper>
        <div>
          de R$
        </div>
        
          <TextInput
            type="text"
            value={priceMin}
            onChange={handleMinChange}
            placeholder="R$ 00,00"
          />
        
      </InputWrapper>

      <InputWrapper>
        <div>
          até R$
        </div>
        
          
          <TextInput
            type="text"
            value={priceMax}
            onChange={handleMaxChange}
            placeholder="R$ 00,00"
          />
        
      </InputWrapper>

    </RangeContainer>
  );
}