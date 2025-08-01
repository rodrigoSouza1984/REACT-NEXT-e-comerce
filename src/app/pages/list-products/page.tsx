"use client"

import { BannerAnnounceds } from "@/components/list-product/banner-announceds"
import { FilterAndMenuCategorysBar } from "@/components/list-product/filters-and-menu-categorys-bar/filters-and-menu-categorys-bar"
import { ProductList } from "@/components/list-product/product-list"
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
      <FilterAndMenuCategorysBar/> 
      <BannerAnnounceds/>  
      <ProductList/>  
    </PageWrapper>
  )
}