
import { ProductContext } from "@/contexts/product-context";
import { useContext } from "react";

export function useProductContext() {
    return useContext(ProductContext)
}