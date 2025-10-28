import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle2,
  Star,
  ShieldCheck,
  Truck,
  Wallet,
  ShoppingCart,
  Send,
  ShoppingBag,
  Package,
  CreditCard,
  Tag,
} from "lucide-react";
import { useState } from "react";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-extrabold text-white drop-shadow-sm">
        {value}
      </div>
      <div className="text-white/90 text-sm mt-1">{label}</div>
    </div>
  );
}

export default function Index() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Waitlist submission:", formData);
    // TODO: Add API call to submit waitlist data
    setIsDialogOpen(false);
    // Reset form
    setFormData({ name: "", email: "", businessName: "" });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <ShoppingBag className="absolute top-20 left-[10%] w-12 h-12 text-[#ef5d50]/20 animate-float" style={{ animationDelay: '0s' }} />
          <Package className="absolute top-32 right-[15%] w-14 h-14 text-primary/20 animate-float" style={{ animationDelay: '1s' }} />
          <ShoppingCart className="absolute bottom-40 left-[20%] w-10 h-10 text-[#ef5d50]/20 animate-float" style={{ animationDelay: '2s' }} />
          <CreditCard className="absolute top-48 left-[30%] w-12 h-12 text-primary/20 animate-float" style={{ animationDelay: '1.5s' }} />
          <Tag className="absolute bottom-32 right-[25%] w-11 h-11 text-[#ef5d50]/20 animate-float" style={{ animationDelay: '0.5s' }} />
          <Truck className="absolute top-64 right-[10%] w-13 h-13 text-primary/20 animate-float" style={{ animationDelay: '2.5s' }} />
          <Wallet className="absolute bottom-20 left-[15%] w-10 h-10 text-[#ef5d50]/20 animate-float" style={{ animationDelay: '3s' }} />
          <ShoppingBag className="absolute top-40 right-[30%] w-9 h-9 text-primary/20 animate-float" style={{ animationDelay: '1.2s' }} />
        </div>
        <div className="container" style={{ padding: "10px 60px 33px" }}>
          <div className="grid md:grid-cols-2 items-center gap-8">
            <div>
              <div className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground/70">
                WhatsApp-first commerce
              </div>
              <h1 className="mt-4 text-4xl leading-tight font-extrabold tracking-tight md:text-5xl">
                <span className="text-[#ef5d50]">Automate </span> Your Orders.<br />
                <span className="text-[#ef5d50]">Never Miss a Sale, </span> Even When You're Away.
              </h1>
              <p className="mt-4 text-muted-foreground max-w-xl">
                Sayar helps merchants sell, accept Naira payments, and manage
                orders directly inside WhatsApp — no website or coding required.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="rounded-full h-11 px-8">Join Waitlist</Button>
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
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="businessName">Business Name (Optional)</Label>
                        <Input
                          id="businessName"
                          placeholder="Your business name"
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        />
                      </div>
                      <Button type="submit" className="w-full rounded-full">
                        Submit
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
                <Button
                  variant="outline"
                  className="rounded-full h-11 px-8 border-[#ef5d50] text-[#ef5d50] hover:bg-[#ef5d50] hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('how-it-works');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  How It Works
                </Button>
              </div>
            </div>
            <div className="relative" style={{ paddingLeft: "50%" }}>
              <div className="mx-auto h-[520px] max-w-[280px] rounded-[2.2rem] bg-neutral-900/90 shadow-2xl p-2 ring-1 ring-black/10">
                <div className="h-full rounded-[1.8rem] overflow-hidden flex flex-col">
                  {/* Header */}
                  <div className="bg-[#075e54] text-white px-4 py-3 flex items-center gap-2">
                    <div className="h-7 w-7 rounded-full bg-white/20" />
                    <div className="leading-tight">
                      <div className="text-sm font-semibold">Sayar</div>
                      <div className="text-[10px] text-white/80">
                        WhatsApp commerce
                      </div>
                    </div>
                  </div>
                  {/* Chat */}
                  <div className="flex-1 bg-neutral-900 px-3 py-4 space-y-2 text-[12px]">
                    <div className="max-w-[80%] rounded-lg bg-white/10 text-white px-3 py-2">
                      Hi! Share a product link or tell me what you need.
                    </div>
                    <div className="max-w-[80%] ml-auto rounded-lg bg-[#dcf8c6] text-black px-3 py-2 shadow">
                      Hi Sayar, I'd like 50 leather tote bags in black. Please
                      add to my cart.
                    </div>
                    <div className="max-w-[80%] rounded-lg bg-white px-3 py-2 text-black shadow">
                      <div className="flex items-center gap-2 text-[11px] font-semibold">
                        <ShoppingCart className="h-3 w-3 text-[#ef5d50]" /> Cart
                      </div>
                      <div className="mt-1 text-[11px]">
                        Leather Tote Bag × 50 • Black
                      </div>
                      <div className="mt-1 text-[11px] font-medium">
                        ₦3,800/unit • Est. 7–10 days
                      </div>
                    </div>
                    <div className="max-w-[80%] ml-auto rounded-lg bg-[#dcf8c6] text-black px-3 py-2 shadow">
                      Sounds good. Please send invoice.
                    </div>
                  </div>
                  {/* Input */}
                  <div className="px-3 py-3 bg-neutral-900 flex items-center gap-2">
                    <div className="flex-1 h-8 rounded-full bg-white/10" />
                    <div className="h-8 w-8 rounded-full bg-[#ef5d50] grid place-items-center text-white">
                      <Send className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* KPI band */}
        <div className="bg-primary">
          <div className="container py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <Stat value="20+" label="Merchants on our waitlist" />
            <Stat
              value="Meta Cloud"
              label="Built on Meta Cloud API for reliability & scale"
            />
            <Stat value="3 min" label="Setup — sell instantly from WhatsApp" />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20">
        <div className="container grid gap-10 md:grid-cols-2 items-center">
          <div className="mx-auto h-[520px] max-w-[280px] rounded-[2.2rem] bg-gradient-to-b from-neutral-900 to-neutral-800 shadow-2xl p-2 ring-1 ring-black/10">
            <div className="h-full rounded-[1.8rem] bg-neutral-950 p-4 flex flex-col text-white">
              <div className="text-sm text-white/70">Sayar</div>
              <div className="mt-auto space-y-3">
                <div className="rounded-xl bg-white/5 p-3 backdrop-blur">
                  Product photos and details
                </div>
                <div className="rounded-xl bg-white/5 p-3 backdrop-blur">
                  Order summary
                </div>
              </div>
            </div>
          </div>
          <div style={{ paddingRight: "22px", margin: "0 35px 0 -4px" }}>
            <div className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium">
              Benefits
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">
            Here's How Sayar Works
            </h2>
            <ul className="space-y-4" style={{ margin: "24px 0 0 -2px" }}>
              {[
                 {
                  title: "Customer Messages You",
                  desc: "Customer clicks your link or sends a message",
                  icon: <CheckCircle2 className="text-[#ef5d50]" />,
                },
                {
                  title: "Browse Your Catalog",
                  desc: "Full product catalog shows instantly in chat",
                  icon: <ShoppingCart className="text-[#ef5d50]" />,
                },
                {
                  title: "Instant Checkout",
                  desc: "Sayar creates checkout with payment and shipping",
                  icon: <Wallet className="text-[#ef5d50]" />,
                },
                {
                  title: "You Get Paid",
                  desc: "Order confirmed, payment received—all automated",
                  icon: <Truck className="text-[#ef5d50]" />,
                },
              ].map((b) => (
                <li key={b.title} className="flex gap-4">
                  <div className="mt-1">{b.icon}</div>
                  <div>
                    <div className="font-semibold">{b.title}</div>
                    <p className="text-muted-foreground text-sm">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Button className="mt-6 rounded-full">Get Started</Button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-16">
        <div
          className="container text-center"
          style={{ padding: "0 57px 0 46px" }}
        >
          <div className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium">
          Why Choose Sayar
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">
          More Sales, Less Stress

          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Sayar helps small businesses save time, close more sales, and stay organized — all inside WhatsApp.

</p>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {[
              {
                icon: <ShieldCheck className="text-[#ef5d50]" />,
                title: "WhatsApp Automation",
                desc: "Auto-replies, order confirmation and checkout flows inside chat.",
              },
              {
                icon: <Truck className="text-[#ef5d50]" />,
                title: "Catalog & Orders",
                desc: "Share live product catalogs and record orders automatically.",
              },
              {
                icon: <Wallet className="text-[#ef5d50]" />,
                title: "Instant Naira Payments",
                desc: "Secure local payments via Paystack & Korapay integrations.",
              },
              
            ].map((s) => (
              <Card key={s.title} className="p-6 text-left h-full flex flex-col">
                <div className="flex items-center gap-3">
                  {s.icon}
                  <div className="font-semibold">{s.title}</div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground flex-grow">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits 
      <section className="py-16" style={{ padding: "64px 24px 64px 25px" }}>
        <div className="container text-center">
          <div className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium">
            Benefits
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">
            ✨ 4–5 Word Benefits
          </h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            Short, tight, outcome-driven benefits that matter to merchants.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-5 gap-4">
            <div className="rounded-xl border border-input bg-white/5 py-6 px-4">
              <div className="font-semibold">Sell Faster on WhatsApp</div>
            </div>
            <div className="rounded-xl border border-input bg-white/5 py-6 px-4">
              <div className="font-semibold">Instant Order Confirmation</div>
            </div>
            <div className="rounded-xl border border-input bg-white/5 py-6 px-4">
              <div className="font-semibold">No Missed Messages</div>
            </div>
            <div className="rounded-xl border border-input bg-white/5 py-6 px-4">
              <div className="font-semibold">Seamless Checkout Flow</div>
            </div>
            <div className="rounded-xl border border-input bg-white/5 py-6 px-4">
              <div className="font-semibold">Smart Customer Tracking</div>
            </div>
          </div>
        </div>
      </section>
      */}
      {/* Testimonials
      <section className="py-16">
        <div className="container text-center">
          <div className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium">
            Testimonials
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">
            Hear it from Our Customers
          </h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6 text-left">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-6">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      className="h-4 w-4 text-[#ef5d50] fill-[#ef5d50]"
                    />
                  ))}
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  “Sayar made selling on WhatsApp effortless and fast. Great
                  automation and reliable payments.”
                </p>
                <div className="mt-4 text-sm font-medium">Davidchi Santos</div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      */}
      {/* FAQ */}
      <section id="faq" className="py-16 bg-accent/40">
        <div
          className="container grid md:grid-cols-2 gap-10 items-start"
          style={{ padding: "0 73px 0 32px" }}
        >
          <div style={{ marginLeft: "35px" }}>
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Got Questions? We’ve Got Answers
            </h3>
            <p className="mt-2 text-muted-foreground">
              Click a question to see more details. Still need help? Reach out
              to us.
            </p>
            <div className="mt-6 flex gap-3">
              <Button variant="outline" className="rounded-full">
                Contact us
              </Button>
              <Button className="rounded-full">See all questions</Button>
            </div>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How long does it take to deliver my order?
              </AccordionTrigger>
              <AccordionContent>
                Most orders take 5–10 business days depending on supplier and
                destination.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can I track my order?</AccordionTrigger>
              <AccordionContent>
                Yes. We provide real‑time tracking after your order is
                confirmed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                What payment methods are accepted?
              </AccordionTrigger>
              <AccordionContent>
                We accept cards, bank transfer and popular local options.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA band */}
      <section id="pricing" className="py-16 relative bg-primary">
        <div className="container text-center text-white">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Turn Your WhatsApp Into a Sales Engine
          </h3>
          <p className="mt-2 text-white/90">
            Join 20+ merchants automating orders and payments on WhatsApp
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="secondary"
                  className="rounded-full bg-white text-foreground hover:bg-white/90"
                >
                  Join Waitlist
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
                    <Label htmlFor="cta-name">Name *</Label>
                    <Input
                      id="cta-name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cta-email">Email *</Label>
                    <Input
                      id="cta-email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cta-businessName">Business Name (Optional)</Label>
                    <Input
                      id="cta-businessName"
                      placeholder="Your business name"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    />
                  </div>
                  <Button type="submit" className="w-full rounded-full">
                    Submit
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
            <Button
              variant="secondary"
              className="rounded-full bg-white/10 text-white hover:bg-white/20"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('benefits');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
