import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bule Café e Cozinha — Feito de café. E dias bons.",
  description: "Café especial, brunch fresco e um lugar para desacelerar. Conheça o Bule.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
