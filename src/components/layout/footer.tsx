import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
  ];

  const footerNavItems = [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
  ];

  return (
    <footer className="border-t border-border/40 bg-card text-card-foreground">
      <div className="container mx-auto max-w-screen-lg px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Archer</h3>
            <p className="text-sm text-muted-foreground">
              Empowering financial institutions with stablecoin liquidity.
            </p>
          </div>
          <div>
            <h4 className="text-md font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerNavItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
               <li>
                <Link href="#disclaimer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
           <div>
            <h4 className="text-md font-semibold text-foreground mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.label} href={social.href} aria-label={social.label} className="text-muted-foreground hover:text-primary transition-colors">
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border/40 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Archer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
