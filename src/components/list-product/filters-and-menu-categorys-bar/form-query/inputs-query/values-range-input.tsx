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
  margin-top: 10px;
  //padding: 3px 10px;  
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

const TextInputWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

const CurrencyLabel = styled.span`
    position: absolute;
    left: 10px;
    font-size: 10px;
    color: var(--custom-purple-classifield);
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
        <TextInputWrapper>
          {(Number(priceMin) <= 0) ? <CurrencyLabel>R$ 00,00</CurrencyLabel> : ''}
          <TextInput
            type="text"
            value={priceMin}
            onChange={handleMinChange}
          />
        </TextInputWrapper>
      </InputWrapper>

      <InputWrapper>
        <div>
          até R$
        </div>
        <TextInputWrapper>
          {(Number(priceMax) <= 0) ? <CurrencyLabel>R$ 00,00</CurrencyLabel> : ''}
          <TextInput
            type="text"
            value={priceMax}
            onChange={handleMaxChange}
          />
        </TextInputWrapper>
      </InputWrapper>

    </RangeContainer>
  );
}