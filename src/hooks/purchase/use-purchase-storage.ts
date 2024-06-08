import { PurchaseStorageContext } from "@/contexts/purchase-storage-context";
import { useContext } from "react";

export function usePurchaseStorageContext() {
    return useContext(PurchaseStorageContext)
}