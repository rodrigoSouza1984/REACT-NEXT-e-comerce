import { CategorysContext } from "@/contexts/categorys-context";
import { useContext } from "react";

export function useCategorysFilter() {
    return useContext(CategorysContext)
}