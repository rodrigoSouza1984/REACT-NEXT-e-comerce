"use client"

import { FilterAndMenuCategorysBar } from "@/components/list-product/filters-and-menu-categorys-bar/filters-and-menu-categorys-bar"
import { ProductCard } from "@/components/product-card/product-card-component"
import styled from "styled-components"

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;  
  align-items: center;  
  width: 100%;  
`

export default function ListProducts() {
  return (
    <PageWrapper>
      {/* <BannerAnnounceds/> */}
      <FilterAndMenuCategorysBar/>   
      <ProductCard/>  
    </PageWrapper>
  )
}