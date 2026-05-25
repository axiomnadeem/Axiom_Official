import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  weight: ['300', '400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Axiom Dynamics — Intelligent Digital Systems',
  description:
    'Axiom Dynamics builds intelligent digital systems for the future. Cutting-edge software, AI platforms, and next-generation tools.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className={`${inter.className} ${spaceGrotesk.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
