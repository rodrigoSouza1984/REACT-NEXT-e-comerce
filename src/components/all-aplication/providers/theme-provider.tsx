"use client"

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";

interface DefaultProvidersProps {
    children: ReactNode
}

export const theme = {
    desktopBreakpoint: "1360px",	    //=> tela para desktop
    tabletBreakPoint: "1100px",			//=> tela para tablet                                        
    smallerTabletBreakPoint: "740px",   //=> tela para tablet menor	
    celPhoneBreakPoint: "630px"         //=> tela para celular
}

export function ThemeProviders({ children }: DefaultProvidersProps) {
    const client = new QueryClient();

    return (
        <QueryClientProvider client={client}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </QueryClientProvider>
    )

}