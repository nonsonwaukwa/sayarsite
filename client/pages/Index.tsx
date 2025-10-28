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
} from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

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

const heroTexts = [
  { highlight: "Automate", rest: "Your Orders." },
  { highlight: "Track", rest: "Sales Records." },
  { highlight: "Manage", rest: "Your Inventory." },
  { highlight: "Accept", rest: "Naira Payments." },
];

export default function Index() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
  });
  const { toast } = useToast();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
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
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="container py-10 px-4 md:px-16 lg:px-20">
          <div className="grid md:grid-cols-2 items-center gap-8">
            <div>
              <div className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground/70">
                WhatsApp-first commerce
              </div>
              <h1 className="mt-4 text-4xl leading-tight font-extrabold tracking-tight md:text-5xl">
                <span 
                  key={currentTextIndex} 
                  className="inline-block animate-in fade-in slide-in-from-bottom-2 duration-500"
                >
                  <span className="text-[#ef5d50]">{heroTexts[currentTextIndex].highlight} </span>
                  {heroTexts[currentTextIndex].rest}
                </span>
                <br />
                <span className="text-[#ef5d50]">Never Miss a Sale, </span> Even When You're Away.
              </h1>
              <p className="mt-4 text-muted-foreground max-w-xl">
              Automate orders, track payments, and keep all invoices and receipts in one dashboard, so you never lose a sale or customer record.

              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="rounded-full h-11 px-8">Get Early Access</Button>
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
                      <Button type="submit" className="w-full rounded-full" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit"}
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
            <div className="relative flex justify-end md:pl-[20%]">
              <div className="max-w-lg w-full">
                <img 
                  src="/whatsapp-product-catalogs-1024x847.png" 
                  alt="WhatsApp Product Catalog" 
                  className="w-full h-auto"
                />
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
      <section id="how-it-works" className="py-20">
        <div className="container grid gap-10 md:grid-cols-2 items-center">
          {/* Two Phone Mockup */}
          <div className="flex gap-3 md:gap-6 justify-center items-start scale-90 md:scale-100">
            {/* Phone 1 - Cart */}
            <div className="w-[220px] md:w-[260px] h-[440px] md:h-[520px] rounded-[2rem] md:rounded-[2.5rem] bg-white shadow-2xl border-[8px] md:border-[10px] border-gray-800 flex flex-col overflow-hidden">
              <div className="bg-[#075e54] px-4 py-3 flex items-center gap-3">
                <button className="text-white text-lg">✕</button>
                <span className="text-white text-base font-medium flex-1">Your cart</span>
              </div>
              <div className="flex-1 bg-white p-3 overflow-auto">
                <p className="text-xs font-medium mb-3">2 Items</p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-red-800 rounded" />
                    <div className="flex-1">
                      <p className="text-[11px] font-medium">Chequered Red Shirt</p>
                      <div className="flex items-center gap-2 mt-1">
                        <button className="w-5 h-5 border rounded text-[10px]">−</button>
                        <button className="w-5 h-5 border rounded text-[10px]">+</button>
                      </div>
                    </div>
                    <p className="text-xs font-bold">₦5000</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gray-200 rounded" />
                    <div className="flex-1">
                      <p className="text-[11px] font-medium">White Cotton Shirt</p>
                      <div className="flex items-center gap-2 mt-1">
                        <button className="w-5 h-5 border rounded text-[10px]">−</button>
                        <button className="w-5 h-5 border rounded text-[10px]">+</button>
                      </div>
                    </div>
                    <p className="text-xs font-bold">₦3000</p>
                  </div>
                </div>
                <div className="border-t pt-3 mt-auto">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs font-medium">Subtotal</span>
                    <span className="text-sm font-bold">₦8000</span>
                  </div>
                  <p className="text-[10px] text-gray-500 mb-3">The business will confirm your order and total price, including any tax, fees and discounts</p>
                </div>
              </div>
              <div className="bg-white px-4 py-4 border-t">
                <button className="w-full bg-[#075e54] text-white rounded-full py-3 text-sm font-medium">
                  Place order
                </button>
              </div>
            </div>

            {/* Phone 2 - Chat */}
            <div className="w-[220px] md:w-[260px] h-[440px] md:h-[520px] rounded-[2rem] md:rounded-[2.5rem] bg-white shadow-2xl border-[8px] md:border-[10px] border-gray-800 flex flex-col overflow-hidden">
              <div className="bg-[#075e54] px-4 py-3 flex items-center gap-3">
                <button className="text-white text-lg">←</button>
                <div className="w-8 h-8 bg-white/20 rounded-full" />
                <span className="text-white text-sm font-medium flex-1">XYZ Mart ✓</span>
                <button className="text-white text-lg">⋮</button>
              </div>
              <div className="flex-1 bg-[#e5ddd5] p-4 overflow-auto space-y-2">
                
                <div className="text-[10px] text-gray-500 text-center">5:04 pm</div>
                <div className="max-w-[85%] ml-auto bg-white rounded-lg p-2 shadow">
                  <div className="flex items-center gap-2 mb-1">
                    <ShoppingCart className="h-3 w-3 text-[#ef5d50]" />
                    <span className="text-[10px] font-medium">2 items</span>
                  </div>
                  <p className="text-[10px] text-gray-600">₦8000 (estimated total)</p>
                  <button className="text-[10px] text-blue-600 mt-1">View sent cart</button>
                </div>
                <div className="text-[10px] text-gray-500 text-right">5:05 pm ✓✓</div>
                <div className="max-w-[85%] bg-white rounded-lg p-2 shadow">
                  <p className="text-[10px]">Please confirm your delivery address:</p>
                  <button className="text-[10px] text-blue-600 mt-1 block">Confirm Address</button>
                </div>
                <div className="text-[10px] text-gray-500 text-center">5:06 pm</div>
                <div className="max-w-[85%] ml-auto bg-[#dcf8c6] rounded-lg p-2 shadow">
                  <p className="text-[10px]">15 Admiralty Way, Lekki Phase 1, Lagos</p>
                </div>
                <div className="text-[10px] text-gray-500 text-right">5:06 pm ✓✓</div>
                <div className="max-w-[85%] bg-white rounded-lg p-2 shadow">
                  <p className="text-[10px] font-medium mb-2">Order Summary:</p>
                  <div className="space-y-1 text-[9px]">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>₦8,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery</span>
                      <span>₦2,000</span>
                    </div>
                    <div className="flex justify-between font-bold border-t pt-1 mt-1">
                      <span>Total</span>
                      <span>₦10,000</span>
                    </div>
                  </div>
                </div>
                <div className="text-[10px] text-gray-500 text-center">5:07 pm</div>
                <div className="max-w-[85%] bg-white rounded-lg p-2 shadow">
                  <p className="text-[10px]">Your total is <strong>₦10,000</strong>. Tap the button below to make payment.</p>
                  <button className="text-[10px] text-blue-600 mt-1 block">Pay Now</button>
                </div>
                <div className="text-[10px] text-gray-500 text-center">5:07 pm</div>
              </div>
              <div className="bg-gray-100 px-4 py-3 flex items-center gap-3">
                <span className="text-gray-400 text-sm">😊</span>
                <input className="flex-1 text-xs bg-transparent" placeholder="Message" />
                <button className="text-gray-400 text-sm">📎</button>
                <button className="text-gray-400 text-sm">📷</button>
                <button className="w-9 h-9 rounded-full bg-[#075e54] text-white text-sm">🎤</button>
              </div>
            </div>
          </div>
          
          <div className="pr-4 md:pr-6 md:pl-[22%]">
            <div className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium">
              How it works
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">
            Here's How Sayar Works
            </h2>
            <ul className="space-y-4 mt-6">
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
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="mt-8 rounded-full h-12 px-10 text-base font-semibold">
                  Get Early Access
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
                    <Label htmlFor="how-name">Name *</Label>
                    <Input
                      id="how-name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="how-email">Email *</Label>
                    <Input
                      id="how-email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="how-businessName">Business Name (Optional)</Label>
                    <Input
                      id="how-businessName"
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
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="benefits" className="py-16">
        <div className="container text-center px-4 md:px-12 lg:px-16">
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
        <div className="container grid md:grid-cols-2 gap-10 items-start px-4 md:px-12 lg:px-20">
          <div className="md:ml-8" style={{ paddingTop: "12%" }}>
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Frequently Asked Questions
            </h3>
            <p className="mt-2 text-muted-foreground">
              Everything you need to know about Sayar. Still have questions? Reach out to us at hello@usesayar.com
            </p>
          
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What types of businesses can use Sayar?
              </AccordionTrigger>
              <AccordionContent>
                Any business that sells products and gets customer messages on WhatsApp - clothing brands, food businesses, cosmetics, electronics, and more. If you sell online and use WhatsApp, Sayar can help you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do customers place orders?</AccordionTrigger>
              <AccordionContent>
                Your customers chat with you as usual on WhatsApp. Sayar helps them add products to cart and complete checkout automatically.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                How do I get paid?
              </AccordionTrigger>
              <AccordionContent>
                Payments are processed securely through Paystack and Korapay. You'll receive funds directly to your business account.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                When will Sayar be available?
              </AccordionTrigger>
              <AccordionContent>
                We're currently onboarding our first group of merchants. Join the waitlist to get early access.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                How much will it cost?
              </AccordionTrigger>
              <AccordionContent>
                Setup and onboarding are free for early waitlist members. We only collect a very small commission on sales made through Sayar — no hidden fees or monthly charges.
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
                const element = document.getElementById('how-it-works');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              How it Works
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
