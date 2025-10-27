import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Star, ShieldCheck, Truck, Wallet, ShoppingCart, Send } from "lucide-react";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-extrabold text-white drop-shadow-sm">{value}</div>
      <div className="text-white/90 text-sm mt-1">{label}</div>
    </div>
  );
}

export default function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-200px,rgba(253,234,200,0.9),transparent),linear-gradient(to_bottom,white,white)]" />
        <div className="container pt-14 pb-8 md:pt-20 md:pb-16">
          <div className="grid md:grid-cols-2 items-center gap-8">
            <div>
              <div className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground/70">WhatsApp-first commerce</div>
              <h1 className="mt-4 text-4xl leading-tight font-extrabold tracking-tight md:text-5xl">
                Help Nigerian merchants turn <span className="text-primary">WhatsApp</span> chats into organized, <span className="text-primary">automated</span> sales
              </h1>
              <p className="mt-4 text-muted-foreground max-w-xl">
                Sayar helps merchants sell, accept Naira payments, and manage orders directly inside WhatsApp — no website or coding required.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button className="rounded-full h-11 px-6">Get Started</Button>
                <div className="relative flex-1 min-w-[260px]">
                  <Input className="h-11 rounded-full pl-4 pr-12" placeholder="Describe the product or paste a WhatsApp message" />
                  <Button className="absolute right-1 top-1 h-9 rounded-full px-4" size="sm">Search</Button>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="mx-auto h-[520px] max-w-[280px] rounded-[2.2rem] bg-neutral-900/90 shadow-2xl p-2 ring-1 ring-black/10">
                <div className="h-full rounded-[1.8rem] overflow-hidden flex flex-col">
                  {/* Header */}
                  <div className="bg-[#075e54] text-white px-4 py-3 flex items-center gap-2">
                    <div className="h-7 w-7 rounded-full bg-white/20" />
                    <div className="leading-tight">
                      <div className="text-sm font-semibold">Sayar</div>
                      <div className="text-[10px] text-white/80">WhatsApp commerce</div>
                    </div>
                  </div>
                  {/* Chat */}
                  <div className="flex-1 bg-neutral-900 px-3 py-4 space-y-2 text-[12px]">
                    <div className="max-w-[80%] rounded-lg bg-white/10 text-white px-3 py-2">Hi! Share a product link or tell me what you need.</div>
                    <div className="max-w-[80%] ml-auto rounded-lg bg-[#dcf8c6] text-black px-3 py-2 shadow">Hi Sayar, I'd like 50 leather tote bags in black. Please add to my cart.</div>
                    <div className="max-w-[80%] rounded-lg bg-white px-3 py-2 text-black shadow">
                      <div className="flex items-center gap-2 text-[11px] font-semibold"><ShoppingCart className="h-3 w-3 text-primary" /> Cart</div>
                      <div className="mt-1 text-[11px]">Leather Tote Bag × 50 • Black</div>
                      <div className="mt-1 text-[11px] font-medium">₦3,800/unit • Est. 7–10 days</div>
                    </div>
                    <div className="max-w-[80%] ml-auto rounded-lg bg-[#dcf8c6] text-black px-3 py-2 shadow">Sounds good. Please send invoice.</div>
                  </div>
                  {/* Input */}
                  <div className="px-3 py-3 bg-neutral-900 flex items-center gap-2">
                    <div className="flex-1 h-8 rounded-full bg-white/10" />
                    <div className="h-8 w-8 rounded-full bg-primary grid place-items-center text-white">
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
            <Stat value="Meta Cloud" label="Built on Meta Cloud API for reliability & scale" />
            <Stat value="3 min" label="Setup — sell instantly from WhatsApp" />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container grid gap-10 md:grid-cols-2 items-center">
          <div className="mx-auto h-[520px] max-w-[280px] rounded-[2.2rem] bg-gradient-to-b from-neutral-900 to-neutral-800 shadow-2xl p-2 ring-1 ring-black/10">
            <div className="h-full rounded-[1.8rem] bg-neutral-950 p-4 flex flex-col text-white">
              <div className="text-sm text-white/70">Sayar</div>
              <div className="mt-auto space-y-3">
                <div className="rounded-xl bg-white/5 p-3 backdrop-blur">Product photos and details</div>
                <div className="rounded-xl bg-white/5 p-3 backdrop-blur">Order summary</div>
              </div>
            </div>
          </div>
          <div>
            <div className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium">Benefits</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">Why Thousands Choose Sayar</h2>
            <ul className="mt-6 space-y-4">
              {[
                { icon: <ShieldCheck className="text-primary" />, title: "WhatsApp Automation", desc: "Auto-replies, order confirmation and checkout flows inside chat." },
                { icon: <Truck className="text-primary" />, title: "Catalog & Orders", desc: "Share live product catalogs and record orders automatically." },
                { icon: <Wallet className="text-primary" />, title: "Instant Naira Payments", desc: "Secure local payments via Paystack & Korapay integrations." },
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
      <section className="py-16">
        <div className="container text-center">
          <div className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium">How it Works</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">Here's How Sayar Works</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Follow three simple steps to convert chat into confirmed orders.</p>

          <div className="mt-10 grid md:grid-cols-3 gap-6 items-start">
            {[
              { title: "Chat", desc: "Merchant receives structured order in WhatsApp.", icon: <CheckCircle2 className="text-primary" /> },
              { title: "Checkout", desc: "Collect Naira payments and issue receipts automatically.", icon: <Wallet className="text-primary" /> },
              { title: "Dashboard", desc: "Track orders, customers and revenue from one place.", icon: <Truck className="text-primary" /> },
            ].map((s) => (
              <Card key={s.title} className="p-6 text-left">
                <div className="flex items-center gap-3">
                  {s.icon}
                  <div className="font-semibold">{s.title}</div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container text-center">
          <div className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium">Benefits</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">✨ 4–5 Word Benefits</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Short, tight, outcome-driven benefits that matter to merchants.</p>

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

      {/* Testimonials */}
      <section className="py-16">
        <div className="container text-center">
          <div className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium">Testimonials</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">Hear it from Our Customers</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6 text-left">
            {[1,2,3].map((i) => (
              <Card key={i} className="p-6">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 text-primary fill-primary" />
                  ))}
                </div>
                <p className="mt-3 text-sm text-muted-foreground">“Sayar made selling on WhatsApp effortless and fast. Great automation and reliable payments.”</p>
                <div className="mt-4 text-sm font-medium">Davidchi Santos</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-accent/40">
        <div className="container grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Got Questions? We’ve Got Answers</h3>
            <p className="mt-2 text-muted-foreground">Click a question to see more details. Still need help? Reach out to us.</p>
            <div className="mt-6 flex gap-3">
              <Button variant="outline" className="rounded-full">Contact us</Button>
              <Button className="rounded-full">See all questions</Button>
            </div>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How long does it take to deliver my order?</AccordionTrigger>
              <AccordionContent>Most orders take 5–10 business days depending on supplier and destination.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can I track my order?</AccordionTrigger>
              <AccordionContent>Yes. We provide real‑time tracking after your order is confirmed.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What payment methods are accepted?</AccordionTrigger>
              <AccordionContent>We accept cards, bank transfer and popular local options.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA band */}
      <section className="py-16 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary to-amber-500" />
        <div className="container text-center text-white">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Your affordable ordering starts here</h3>
          <p className="mt-2 text-white/90">Start automating sales on Sayar today</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button variant="secondary" className="rounded-full bg-white text-foreground hover:bg-white/90">Get started now</Button>
            <Button variant="secondary" className="rounded-full bg-white/10 text-white hover:bg-white/20">Track an order</Button>
          </div>
        </div>
      </section>
    </>
  );
}
