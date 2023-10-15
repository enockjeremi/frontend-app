import React from "react";
import type { Metadata } from "next";
import "./globals.css";

//Context
import { MessageContextProvider } from "@/app/context/message-context";
import { Providers } from "@/app/providers";

//Components
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Marines",
  description: "Reportes y diagnosticos.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body>
        <MessageContextProvider>
          <Providers>
            <Header />
            <main className="w-full lg:max-w-5xl mx-auto flex min-h-screen flex-col items-center px-2">
              {children}
            </main>
            <Footer />
          </Providers>
        </MessageContextProvider>
      </body>
    </html>
  );
}
