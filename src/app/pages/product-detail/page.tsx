"use client"

import { useProductContext } from "@/hooks/products/use-products-context";


export default function ProductDetail(props?: any) {        
    const { product, setProduct } = useProductContext()
    
    console.log(props.searchParams, product);
    return (
        <div>aasasasasasas</div>
    )
}