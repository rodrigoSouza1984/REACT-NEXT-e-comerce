// "use client"

import { filterItemsCategorysData } from "@/types/filter-types-categorys-list";
import { ReactNode, createContext, useDeferredValue, useState } from "react"

interface ProviderProps {
    children: ReactNode
}


export const CategorysContext = createContext({
    categoryType: filterItemsCategorysData[0].type,
    setCategoryType: (value: any) => {},   
})

export function CategorysContextProvider({children} : ProviderProps){ 
    
    const [categoryType, setCategoryType] = useState(filterItemsCategorysData[0].type)

    return (
        <CategorysContext.Provider value={{                   
            categoryType, 
            setCategoryType, 
        }}>
            {children}
        </CategorysContext.Provider>
    )
}