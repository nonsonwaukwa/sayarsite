import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

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
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="hover:underline">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/track" className="hover:underline">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:underline">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>hello@sayar.africa</li>
              <li>+234 809 776 9946</li>
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
        © {new Date().getFullYear()} Sayar. All rights reserved.
      </div>
    </footer>
  );
}
