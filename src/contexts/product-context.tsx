import { ReactNode, createContext, useState } from "react"

interface ProviderProps {
    children: ReactNode
}

export const ProductContext = createContext({
    productList: [] ,
    setProductList: (value: any) => {},   

    quantityTotalProduct: 0 ,
    setQuantityTotalProduct: (value: any) => {},   

    product: null,
    setProduct: (value: any) => {}  
})

export function ProductProvider({children} : ProviderProps){   

    const [productList, setProductList] = useState([])
    const [quantityTotalProduct, setQuantityTotalProduct] = useState(0);     

    const [product, setProduct] = useState(null);

    return (
        <ProductContext.Provider value={{                     
            productList,
            setProductList,

            quantityTotalProduct,
            setQuantityTotalProduct,

            product,
            setProduct
        }}>
            {children}
        </ProductContext.Provider>
    )
}