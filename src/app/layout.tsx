import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import NavHeader from "./components/home-page/header-main/Navbar";
import { MessageContextProvider } from "./context/message-context";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MessageContextProvider>
          <Providers>
            <NavHeader />
            <main className="w-full lg:max-w-5xl mx-auto flex min-h-screen flex-col items-center px-2">
              {children}
            </main>
          </Providers>
        </MessageContextProvider>
      </body>
    </html>
  );
}