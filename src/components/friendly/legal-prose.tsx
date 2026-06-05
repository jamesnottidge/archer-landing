import { cn } from '@/lib/utils';

export function LegalProse({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <article
      className={cn(
        'prose-friendly max-w-none text-foreground',
        className
      )}
    >
      {children}
    </article>
  );
}
