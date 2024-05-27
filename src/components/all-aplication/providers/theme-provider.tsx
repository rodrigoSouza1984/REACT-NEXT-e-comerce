"use client"

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";

interface DefaultProvidersProps {
    children: ReactNode
}

export const theme = {
    desktopBreakpoint: "1280px",	    //=> tela para desktop
    tabletBreakPoint: "930px",			//=> tela para tablet
    celPhoneBreakPoint: "660px"         //=> tela para celular
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