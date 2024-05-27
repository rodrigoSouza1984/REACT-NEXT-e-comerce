"use client"

import { Saira } from "next/font/google";
import "./globals.css";
import { DefaultContainerFullScreen } from "@/components/all-aplication/pages-default-layouts/default-screen-full-page";
import { DefaultContainerControlMaxWidthPage } from "@/components/all-aplication/pages-default-layouts/default-control-max-width-page";
import { ThemeProviders } from "@/components/all-aplication/providers/theme-provider";



const saira = Saira({
  weight: ['300', '400', '500', '600'],
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={saira.className}>
        <ThemeProviders>
          <DefaultContainerFullScreen>
            <DefaultContainerControlMaxWidthPage>
              <div className="flex flex-col w-full">
                {children}
              </div>
            </DefaultContainerControlMaxWidthPage>
          </DefaultContainerFullScreen>
        </ThemeProviders>
      </body>
    </html>
  );
}
