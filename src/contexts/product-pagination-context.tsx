import { ReactNode, createContext, useState } from "react"

interface ProviderProps {
    children: ReactNode
}

export const ProductPaginationContext = createContext({
    totalPages: 0,
    setTotalPages: (value: any) => { },

    page: 1,
    setPage: (value: any) => { },

    quantityItensByPage: 10,
    setquantityItensByPage: (value: any) => { },

    currentPage: 1,
    setCurrentPage: (value: any) => { },
})

//const [currentPage, setCurrentPage] = useState(1); 

export function ProductPaginationProvider({ children }: ProviderProps) {

    const [totalPages, setTotalPages] = useState(0)

    const [page, setPage] = useState(1);

    const [quantityItensByPage, setquantityItensByPage] = useState(10);

    const [currentPage, setCurrentPage] = useState(1);

    return (
        <ProductPaginationContext.Provider value={{
            totalPages,
            setTotalPages,

            page,
            setPage,

            quantityItensByPage,
            setquantityItensByPage,

            currentPage,
            setCurrentPage,
        }}>
            {children}
        </ProductPaginationContext.Provider>
    )
}