"use client";

import { useFormContext } from "react-hook-form";
import styled from "styled-components";

interface TextInputWithLabelProps {
    name: string;
    label: string;
    placeholder?: string;
}

const TextInputWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 10px;    
`;

const TextInput = styled.input`
    padding: 10px;
    border: 1px solid var(--custom-purple-classifield);
    border-radius: 8px;
    font-size: 12px;
    color: var(--custom-purple-classifield);
    width: 100%;    
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

export function TextInputWithLabel({ name, label, placeholder }: TextInputWithLabelProps) {
    const { register } = useFormContext();

    return (
        <TextInputWrapper>        
            <TextInput 
                id={name} 
                type="text" 
                placeholder={placeholder} 
                {...register(name)} 
            />
        </TextInputWrapper>
    );
  }