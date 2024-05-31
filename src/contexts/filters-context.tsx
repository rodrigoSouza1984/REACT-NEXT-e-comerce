// "use client"

import { ReactNode, createContext, useDeferredValue, useState } from "react"

interface ProviderProps {
    children: ReactNode
}


export const FilterContext = createContext({
    inputHeaderValue: '',
    setInputHeaderValue: (value: string) => {},   
})

export function FilterContextProvider({children} : ProviderProps){   

    const [inputHeaderValue, setInputHeaderValue] = useState('')
    const deferredInputHeaderValue = useDeferredValue(inputHeaderValue);
    

    return (
        <FilterContext.Provider value={{ 
                      
            inputHeaderValue: deferredInputHeaderValue,           
            setInputHeaderValue, 

        }}>
            {children}
        </FilterContext.Provider>
    )
}