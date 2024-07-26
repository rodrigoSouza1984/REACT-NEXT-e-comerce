// "use client"

import { filterItemsCategorysData } from "@/types/filter-types-categorys-list";
import { PriorityFiltersProductsEnum } from "@/types/priority-filters-products";
import { ReactNode, createContext, useDeferredValue, useState } from "react"

interface ProviderProps {
    children: ReactNode
}


export const FilterContext = createContext({
    inputHeaderValue: '',
    setInputHeaderValue: (value: string) => {},   

    priorityFilter: PriorityFiltersProductsEnum.NEWS,
    setPriorityFilter: (value: any) => {}, 
})

export function FilterContextProvider({children} : ProviderProps){   

    const [inputHeaderValue, setInputHeaderValue] = useState('')
    const deferredInputHeaderValue = useDeferredValue(inputHeaderValue);

    const [priorityFilter, setPriorityFilter] = useState(PriorityFiltersProductsEnum.NEWS)
    

    return (
        <FilterContext.Provider value={{ 
                      
            inputHeaderValue: deferredInputHeaderValue,           
            setInputHeaderValue, 

            priorityFilter, 
            setPriorityFilter,

        }}>
            {children}
        </FilterContext.Provider>
    )
}