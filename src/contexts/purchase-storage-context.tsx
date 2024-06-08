// "use client"

import { getFromLocalStorage } from "@/services/storage-crud"
import { ReactNode, createContext, useState } from "react"

interface ProviderProps {
    children: ReactNode
}

export const PurchaseStorageContext = createContext({
    purchaseStorage: getFromLocalStorage("purchase") || {} ,
    setPurchaseStorage: (value: any) => {}   
})

export function PurchaseStorageProvider({children} : ProviderProps){   

    const [purchaseStorage, setPurchaseStorage] = useState(getFromLocalStorage("purchase") || {} )     

    return (
        <PurchaseStorageContext.Provider value={{                     
            purchaseStorage,
            setPurchaseStorage
        }}>
            {children}
        </PurchaseStorageContext.Provider>
    )
}