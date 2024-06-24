"use client";

import { useFormContext } from "react-hook-form";
import styled from "styled-components";

interface RadioInputProps {
  name: string;
  label: string;
  value: string;
}

const RadioContainer = styled.div`
  display: flex;
  justify-content: start;
  gap: 30px;  
  background-color: var(--background-easy-gray); 
  margin-bottom: 10px;
  padding: 3px 10px;
  border: 1px solid var(--custom-purple-classifield);
  border-radius: 8px;
  height: 30px;
`;

const RadioButton = styled.label<{ checked: boolean }>`
  display: flex;
  align-items: center;  
  cursor: pointer;
  color: var(--custom-purple-classifield);
  font-size: 13px;
  
  input {
    display: none;
  }

  div {
    cursor: pointer;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid var(--custom-purple-classifield);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    background-color: ${({ checked }) => (checked ? 'var(--custom-purple-classifield)' : 'transparent')};
    

    &::after {
      content: "";
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: ${({ checked }) => (checked ? 'var(--custom-purple-classifield)' : 'transparent')};
    }
  }
`;

const RadioInput = ({ name, label, value }: RadioInputProps) => {
  const { register, watch } = useFormContext();
  const selectedValues = watch(name) || [];

  const isChecked = selectedValues.includes(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSelection = e.target.checked
      ? [...selectedValues, value]
      : selectedValues.filter((item: string) => item !== value);

    e.target.checked = newSelection.includes(value);
  };

  return (
    <RadioButton checked={isChecked}>
      <input
        type="checkbox"
        value={value}
        {...register(name, { onChange: handleChange })}
      />
      <div />
      {label}
    </RadioButton>
  );
};

export function RadioInputComponent() {
  return (
    <RadioContainer>
      <RadioInput name="transactionType" label="Compra" value="compra" />
      <RadioInput name="transactionType" label="Venda" value="venda" />
    </RadioContainer>
  );
}