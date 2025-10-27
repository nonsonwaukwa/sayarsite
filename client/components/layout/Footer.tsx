import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-primary to-primary/70 shadow-sm">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor"><path d="M3 5h18v2H3zM3 11h14v2H3zM3 17h10v2H3z"/></svg>
            </span>
            <span className="font-extrabold tracking-tight text-xl">Importa</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Importa makes ordering from global suppliers simple, fast, and budget-friendly. Chat, track, and receive with ease.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/products" className="hover:underline">Products</Link></li>
              <li><Link to="/track" className="hover:underline">Track Order</Link></li>
              <li><Link to="/faq" className="hover:underline">FAQs</Link></li>
              <li><Link to="/blog" className="hover:underline">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>help@importa.biz</li>
              <li>+234 809 776 9946</li>
              <li>82 James Carter Road, UK</li>
            </ul>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Follow us</h4>
          <div className="flex gap-3 text-muted-foreground">
            <a href="#" aria-label="Twitter" className="hover:text-foreground"><Twitter size={20} /></a>
            <a href="#" aria-label="Facebook" className="hover:text-foreground"><Facebook size={20} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-foreground"><Instagram size={20} /></a>
            <a href="#" aria-label="Linkedin" className="hover:text-foreground"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
      <div className="border-t py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Importa. All rights reserved.
      </div>
    </footer>
  );
}
