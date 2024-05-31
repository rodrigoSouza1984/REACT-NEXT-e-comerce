"use client"

import { Saira } from "next/font/google";
import "./globals.css";
import { DefaultContainerFullScreen } from "@/components/all-aplication/pages-default-layouts/default-screen-full-page";
import { DefaultContainerControlMaxWidthPage } from "@/components/all-aplication/pages-default-layouts/default-control-max-width-page";
import { ThemeProviders } from "@/components/all-aplication/providers/theme-provider";
import { Header } from "@/components/all-aplication/header/header-bar";
import styled from "styled-components"
import { FilterContextProvider } from "@/contexts/filters-context";



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

            <DefaultContainerFullScreen>
              <DefaultContainerControlMaxWidthPage>

                <PageContainer>
                  <Header />
                  {children}
                </PageContainer>

              </DefaultContainerControlMaxWidthPage>
            </DefaultContainerFullScreen>

          </FilterContextProvider>
        </ThemeProviders>
      </body>
    </html>
  );
}
