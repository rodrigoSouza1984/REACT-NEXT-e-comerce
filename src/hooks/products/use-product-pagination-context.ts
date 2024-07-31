import { ProductPaginationContext } from "@/contexts/product-pagination-context";
import { useContext } from "react";

export function useProductPaginationContext() {
    return useContext(ProductPaginationContext)
}