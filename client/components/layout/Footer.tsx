import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const targetId = href.replace('#', '');
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container py-12 grid gap-8 md:grid-cols-3">
        <div>
          <Link to="/" className="inline-block">
            <img src="/logo.png" alt="Sayar" className="h-11" />
          </Link>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Sayar turns WhatsApp into a commerce engine for Nigerian
            SMEs—automated orders, Naira payments, and simple order management.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#how-it-works" onClick={(e) => scrollToSection(e, '#how-it-works')} className="hover:underline hover:text-foreground">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#benefits" onClick={(e) => scrollToSection(e, '#benefits')} className="hover:underline hover:text-foreground">
                  Benefits
                </a>
              </li>
             
              <li>
                <a href="#faq" onClick={(e) => scrollToSection(e, '#faq')} className="hover:underline hover:text-foreground">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link to="/privacy" className="hover:underline hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:underline hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
            <h4 className="font-semibold mb-3 mt-6">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>hello@usesayar.com</li>
              <li>+234 802 367 2476</li>
              <li>Lagos, Nigeria</li>
            </ul>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Follow us</h4>
          <div className="flex gap-3 text-muted-foreground">
            <a href="#" aria-label="Twitter" className="hover:text-foreground">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-foreground">
              <Facebook size={20} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-foreground"
            >
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="Linkedin" className="hover:text-foreground">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t py-6 text-center text-sm text-muted-foreground">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <span>© {new Date().getFullYear()} Sayar. All rights reserved.</span>
          <span className="hidden sm:inline">•</span>
          <Link to="/privacy" className="hover:underline hover:text-foreground">
            Privacy Policy
          </Link>
          <span className="hidden sm:inline">•</span>
          <Link to="/terms" className="hover:underline hover:text-foreground">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
