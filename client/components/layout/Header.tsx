import { Link, NavLink } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Features" },
  { to: "/track", label: "Dashboard" },
  { to: "/faq", label: "FAQs" },
  { to: "/blog", label: "Blog" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center gap-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-primary to-primary/70 shadow-sm">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor"><path d="M3 5h18v2H3zM3 11h14v2H3zM3 17h10v2H3z"/></svg>
          </span>
          <span className="font-extrabold tracking-tight text-xl">Sayar</span>
        </Link>
        <nav className="ml-6 hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                cn(
                  "px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-secondary",
                  isActive && "text-foreground bg-secondary"
                )
              }
              end={n.to === "/"}
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="ml-auto hidden md:flex items-center gap-3">
          <div className="w-56">
            <Input placeholder="Search merchants or features" className="rounded-full h-9" />
          </div>
          <Button className="rounded-full h-9 px-5">Get Started</Button>
        </div>
        <div className="ml-auto md:hidden">
          <Button className="rounded-full h-9 px-5">Get Started</Button>
        </div>
      </div>
    </header>
  );
}
