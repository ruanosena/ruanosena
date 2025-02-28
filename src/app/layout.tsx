import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Andika, Fira_Mono } from "next/font/google";
import "./globals.css";

const andikaSans = Andika({
  variable: "--font-andika-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const firaMono = Fira_Mono({
  variable: "--font-fira-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Ruan O. Sena",
  description:
    "Desenvolvedor web criativo e apaixonado por resolver problemas complexos através da programação. Com experiência em React, construo interfaces modernas e responsivas. Sou movido pelo desafio de criar soluções inovadoras e entregar projetos que superam as expectativas dos clientes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={cn(
          andikaSans.variable,
          firaMono.variable,
          "min-h-screen bg-black antialiased",
        )}
      >
        {children}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        ></ThemeProvider>
      </body>
    </html>
  );
}
