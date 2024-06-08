// "use client"

import { getFromLocalStorage } from "@/services/storage-crud"
import { StorageKeys } from "@/utils/global-vars"
import { ReactNode, createContext, useState } from "react"

interface ProviderProps {
    children: ReactNode
}

export const PurchaseStorageContext = createContext({
    purchaseStorage: getFromLocalStorage(StorageKeys.PURCHASHE) || {} ,
    setPurchaseStorage: (value: any) => {}   
})

export function PurchaseStorageProvider({children} : ProviderProps){   

    const [purchaseStorage, setPurchaseStorage] = useState(getFromLocalStorage(StorageKeys.PURCHASHE) || {} )     

    return (
        <PurchaseStorageContext.Provider value={{                     
            purchaseStorage,
            setPurchaseStorage
        }}>
            {children}
        </PurchaseStorageContext.Provider>
    )
}