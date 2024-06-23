"use client"

import styled from "styled-components"
import { FormProvider, useForm } from "react-hook-form"
import { SelectInputWithIcon } from "./inputs-query/select-input-with-icon"
import { RadioInputComponent } from "./inputs-query/radio-input"
import ValuesRangeInput from "./inputs-query/values-range-input"

interface FormModalDetailSearchProps {

}

const ContainerFormModal = styled.header`
    display: flex;    
    align-items: start;
    flex-direction: column;
    justify-content: start;       
    width: 100%;
    //height: 100%;
    padding: 10px 10px;
    background-color: rgba(173, 216, 230, 0.3);
`

// Componente estilizado para o botão
const StyledButtonSubmitForm = styled.button`
    width: 100%;
    border-radius: 8px;
    padding: 10px 16px;
    border: 1px solid var(--custom-purple-classifield);
    background-color: var(--custom-purple-classifield);
    font-family: inherit;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: #fff;
    height: 30px;
    margin-right: 8px;    
    margin-top: 10px;    
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {        
        background-color:var(--custom-purple-classifield-with-opacity);     
    } 
`;


export function FormModalDetailSearch(props: FormModalDetailSearchProps) {

    const methods = useForm({
        defaultValues: {
            imovelType: '', // Defina aqui o valor padrão para o campo
            transactionType: [], 
        },
    });
    const { handleSubmit } = methods;

    const onSubmit = (data: any) => {
        console.log(data);
        // faça algo com os dados do formulário
    };

    return (
        <ContainerFormModal>
            <FormProvider {...methods}>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <SelectInputWithIcon />  
                    <RadioInputComponent />    
                    <ValuesRangeInput/>             
                    <StyledButtonSubmitForm type="submit">Enviar</StyledButtonSubmitForm>
                </form>

            </FormProvider>
        </ContainerFormModal>
    )
}
