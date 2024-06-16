import { CategorysContext } from "@/contexts/categorys-context";
import { useContext } from "react";

export function categorysFilter() {
    return useContext(CategorysContext)
}