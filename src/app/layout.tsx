import type { Metadata } from 'next';
import { fontSans } from '@/lib/fonts';
import './globals.css';
import { cn } from '@/lib/utils';
import LayoutShell from '@/components/layout/layout-shell';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Archer Landing',
  description: 'Stablecoin liquidity for financial institutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <LayoutShell>{children}</LayoutShell>
        <Toaster />
      </body>
    </html>
  );
}
