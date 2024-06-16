"use client"

import { Saira } from "next/font/google";
import "./globals.css";
import { DefaultContainerFullScreen } from "@/components/all-aplication/pages-default-layouts/default-screen-full-page";
import { DefaultContainerControlMaxWidthPage } from "@/components/all-aplication/pages-default-layouts/default-control-max-width-page";
import { ThemeProviders } from "@/components/all-aplication/providers/theme-provider";
import { Header } from "@/components/all-aplication/header/header-bar";
import styled from "styled-components"
import { FilterContextProvider } from "@/contexts/filters-context";
import { PurchaseStorageProvider } from "@/contexts/purchase-storage-context";
import { CategorysContextProvider } from "@/contexts/categorys-context";



const saira = Saira({
  weight: ['300', '400', '500', '600'],
  subsets: ["latin"]
});


const PageContainer = styled.div`
  display: flex;
  flex-direction: column;  
  align-items: center;
  width: 100%; 
  //background-color: red;
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={saira.className}>
        <ThemeProviders>
          <FilterContextProvider>
            <PurchaseStorageProvider>
              <CategorysContextProvider>

                <DefaultContainerFullScreen>
                  <DefaultContainerControlMaxWidthPage>

                    <PageContainer>
                      <Header />
                      {children}
                    </PageContainer>

                  </DefaultContainerControlMaxWidthPage>
                </DefaultContainerFullScreen>
                
              </CategorysContextProvider>
            </PurchaseStorageProvider>
          </FilterContextProvider>
        </ThemeProviders>
      </body>
    </html>
  );
}
