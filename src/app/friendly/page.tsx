import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Legal',
  description: 'Legal documents for the Friendly app.',
};

export default function FriendlyLegalIndexPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Friendly legal documents</h1>
      <p className="text-muted-foreground">
        Public legal pages for the Friendly mobile app.
      </p>
      <ul className="space-y-3 text-lg">
        <li>
          <Link href="/friendly/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link href="/friendly/terms" className="text-primary hover:underline">
            Terms of Service
          </Link>
        </li>
      </ul>
    </div>
  );
}
