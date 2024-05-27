"use client"

import { getAllAsksByProductId } from "@/hooks/products/ask-products";
import { getAllProducts, getProductById } from "@/hooks/products/product";
import { getAllResponseByAskId } from "@/hooks/products/response-ask-product";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  const router = useRouter()


  useEffect(() => {

    // const products = getAllProducts();
    // const product = getProductById('1');
    // const asks = getAllAsksByProductId('1');
    // const responses = getAllResponseByAskId('1');

    // console.log('products', products);
    // console.log('product', product);
    // console.log('asks', asks);
    // console.log('responses', responses);  
    
    router.push("/pages/list-products");

  }, [router]); 

  return (
    <>Loading....</>
  )
}