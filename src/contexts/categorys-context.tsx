// "use client"
import { ReactNode, createContext, useDeferredValue, useState } from "react"

interface ProviderProps {
    children: ReactNode
}


export const CategorysContext = createContext({
    categoryType: 'ALL',
    setCategoryType: (value: any) => {},   
})

export function CategorysContextProvider({children} : ProviderProps){ 
    
    const [categoryType, setCategoryType] = useState('ALL')

    return (
        <CategorysContext.Provider value={{                   
            categoryType, 
            setCategoryType, 
        }}>
            {children}
        </CategorysContext.Provider>
    )
}