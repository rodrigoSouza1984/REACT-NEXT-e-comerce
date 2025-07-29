import { getFromLocalStorage } from "@/services/storage-crud";
import { StorageKeys } from "@/utils/global-vars";
import { createContext, useContext, useState, useEffect } from "react";


interface CartContextData {
  cartCount: number;
  updateCartCount: () => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {
    const cart = getFromLocalStorage(StorageKeys.PURCHASHE, {
      productsCart: [],
    });

    const total = cart.productsCart?.length || 0

    setCartCount(total);
  };

  useEffect(() => {
    updateCartCount();
  }, []);

  return (
    <CartContext.Provider value={{ cartCount, updateCartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}