import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const nav = [
  { to: "#how-it-works", label: "How It Works" },
  { to: "#benefits", label: "Benefits" },
  { to: "#faq", label: "FAQ" },
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
  const [activeSection, setActiveSection] = useState<string>('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
  });
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['how-it-works', 'benefits', 'pricing', 'faq'];
      const scrollPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${sectionId}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Success! 🎉",
          description: "You've been added to the waitlist. We'll be in touch soon!",
        });
        setIsDialogOpen(false);
        setFormData({ name: "", email: "", businessName: "" });
      } else {
        toast({
          title: "Error",
          description: data.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit. Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full pt-3">
      <div className="container">
        <div className="flex items-center justify-between bg-white rounded-2xl shadow-md px-8 py-2.5">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Sayar" className="h-9" />
          </Link>

          {/* Navigation Links - Centered */}
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <a
                key={n.to}
                href={n.to}
                onClick={(e) => scrollToSection(e, n.to)}
                className={`text-sm font-medium transition-all px-3 py-1.5 rounded-full ${
                  activeSection === n.to
                    ? 'bg-[#ef5d50] text-white'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="rounded-full h-9 px-6 text-sm font-medium">
                Join Early Access
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Join the Waitlist</DialogTitle>
                <DialogDescription>
                  Be among the first to experience WhatsApp commerce with Sayar.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="header-name">Name *</Label>
                  <Input
                    id="header-name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="header-email">Email *</Label>
                  <Input
                    id="header-email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="header-businessName">Business Name (Optional)</Label>
                  <Input
                    id="header-businessName"
                    placeholder="Your business name"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  />
                </div>
                <Button type="submit" className="w-full rounded-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
