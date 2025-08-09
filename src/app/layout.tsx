import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IAra - Guia COP 30',
  description: 'Seu guia inteligente para a COP 30 em Belém',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}