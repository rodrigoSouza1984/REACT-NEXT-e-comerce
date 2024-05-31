import { FilterContext } from "@/contexts/filters-context";
import { useContext } from "react";

export function useFiltersContext() {
    return useContext(FilterContext)
}