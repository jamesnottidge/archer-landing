import type { Metadata } from 'next';
import Link from 'next/link';
import { fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: {
    template: '%s · Friendly',
    default: 'Friendly',
  },
  description: 'Legal information for the Friendly app.',
  robots: { index: true, follow: true },
};

export default function FriendlyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={cn('min-h-screen bg-background', fontSans.variable)}>
      <header className="border-b border-border/40 bg-card/80 backdrop-blur">
        <div className="container mx-auto flex max-w-3xl items-center justify-between px-4 py-5 md:px-6">
          <Link
            href="/friendly/terms"
            className="text-xl font-semibold tracking-tight text-foreground"
          >
            Friendly
          </Link>
          <nav className="flex items-center gap-4 text-sm">
            <Link
              href="/friendly/terms"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Terms
            </Link>
            <Link
              href="/friendly/privacy"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-14">
        {children}
      </main>
      <footer className="border-t border-border/40 py-8 text-center text-sm text-muted-foreground">
        <p>
          Operated by{' '}
          <Link href="/" className="text-primary hover:underline">
            Archer
          </Link>
        </p>
      </footer>
    </div>
  );
}
