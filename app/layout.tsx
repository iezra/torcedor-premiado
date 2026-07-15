import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Torcedor Premiado — Torça e concorra a R$1 MILHÃO em prêmios",
  description:
    "iPhone 17 todo dia, R$125 mil por semana, e um carro por mês — tudo isso só por R$1,99 no primeiro mês!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
