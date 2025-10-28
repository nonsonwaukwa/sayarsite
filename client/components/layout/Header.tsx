import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const nav = [
  { to: "#how-it-works", label: "How It Works" },
  { to: "#benefits", label: "Benefits" },
  { to: "#pricing", label: "Pricing" },
  { to: "#faq", label: "Contact" },
];

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const targetId = href.replace('#', '');
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full pt-4">
      <div className="container">
        <div className="flex items-center justify-between bg-white rounded-2xl shadow-md px-8 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Sayar" className="h-11" />
          </Link>

          {/* Navigation Links - Centered */}
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <a
                key={n.to}
                href={n.to}
                onClick={(e) => scrollToSection(e, n.to)}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <Button className="rounded-full h-10 px-6 text-white flex items-center gap-2">
            Get Started
            <MessageCircle className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
