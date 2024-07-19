import { ReactNode, createContext, useState } from "react"

interface ProviderProps {
    children: ReactNode
}

export const ProductContext = createContext({
    productList: [] ,
    setProductList: (value: any) => {},   

    product: null,
    setProduct: (value: any) => {}  
})

export function ProductProvider({children} : ProviderProps){   

    const [productList, setProductList] = useState([])     

    const [product, setProduct] = useState(null);

    return (
        <ProductContext.Provider value={{                     
            productList,
            setProductList,

            product,
            setProduct
        }}>
            {children}
        </ProductContext.Provider>
    )
}