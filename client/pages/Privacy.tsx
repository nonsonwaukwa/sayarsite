import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container max-w-7xl py-12 px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Privacy Policy</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">
            🔐 Privacy Policy
          </h1>
          <p className="text-muted-foreground">
            Last updated: October 2025
          </p>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-12">
          {/* Sidebar Navigation */}
          <aside className="hidden lg:block">
            <nav className="sticky top-24 space-y-1">
              <a href="#overview" className="block py-2 text-sm text-primary hover:text-primary/80 font-medium">
                Overview
              </a>
              <a href="#definitions" className="block py-2 text-sm text-muted-foreground hover:text-foreground">
                1. Definitions
              </a>
              <a href="#information-collect" className="block py-2 text-sm text-muted-foreground hover:text-foreground">
                2. Information We Collect
              </a>
              <a href="#how-we-collect" className="block py-2 text-sm text-muted-foreground hover:text-foreground">
                3. How We Collect and Use Information
              </a>
              <a href="#information-disclosure" className="block py-2 text-sm text-muted-foreground hover:text-foreground">
                4. Information Disclosure
              </a>
              <a href="#managing-information" className="block py-2 text-sm text-muted-foreground hover:text-foreground">
                5. Managing Your Information
              </a>
              <div className="pl-4 space-y-1">
                <a href="#managing-information" className="block py-1 text-xs text-muted-foreground hover:text-foreground">
                  5.1. Data Security
                </a>
                <a href="#managing-information" className="block py-1 text-xs text-muted-foreground hover:text-foreground">
                  5.2. Data Retention
                </a>
                <a href="#managing-information" className="block py-1 text-xs text-muted-foreground hover:text-foreground">
                  5.3. Third-party Links
                </a>
              </div>
              <a href="#cookies" className="block py-2 text-sm text-muted-foreground hover:text-foreground">
                6. Cookies
              </a>
              <a href="#your-rights" className="block py-2 text-sm text-muted-foreground hover:text-foreground">
                7. Your Rights
              </a>
              <a href="#changes" className="block py-2 text-sm text-muted-foreground hover:text-foreground">
                8. Changes to this Privacy Policy
              </a>
              <a href="#contact" className="block py-2 text-sm text-muted-foreground hover:text-foreground">
                Contact Us
              </a>
            </nav>
          </aside>

          {/* Content */}
          <div className="prose prose-slate max-w-none">
            <section id="overview" className="mb-12">
            <p className="text-lg leading-relaxed mb-6">
              Sayar Digital Innovations Ltd ("Sayar", "we", "us", "our") operates a digital commerce platform that enables small and medium-sized businesses ("merchants") to automate sales, manage customer interactions, and process orders through WhatsApp and other online channels.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains what data we collect, how we use it, and your rights under applicable laws, including the Nigeria Data Protection Regulation (NDPR) and other international privacy standards.
            </p>
          </section>

          <hr className="my-12 border-border" />

          {/* Section 1 */}
          <section id="definitions" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">1. Definitions</h2>
            
            <div className="space-y-4">
              <p>
                <strong>"Consent"</strong> — any clear affirmative action by which you agree to the collection and processing of your personal data.
              </p>
              
              <p>
                <strong>"Cookies"</strong> — small text files stored on your device that help us recognize you and improve your experience.
              </p>
              
              <p>
                <strong>"Personal Data"</strong> — any information that identifies you as an individual or that can reasonably be linked to you (e.g., name, email, phone number).
              </p>
              
              <p>
                <strong>"Services"</strong> — the Sayar platform, website, APIs, and related tools that enable merchants to manage their digital sales and customers.
              </p>
              
              <p>
                <strong>"Merchant"</strong> — any business or individual using Sayar to sell products or services.
              </p>
            </div>
          </section>

          <hr className="my-12 border-border" />

          {/* Section 2 */}
          <section id="information-collect" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">2. Information We Collect</h2>
            <p className="mb-6">We may collect and process the following types of information:</p>
            
            <h3 className="text-xl font-semibold mb-4">a. Personal Information</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Full name, phone number, and email address.</li>
              <li>Business details (store name, business type, and category).</li>
              <li>Passwords and authentication details (encrypted).</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">b. Transaction Information</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Order details, customer messages, delivery information.</li>
              <li>Payment confirmations and settlement summaries (via third-party payment partners such as Paystack or Korapay).</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">c. Device & Technical Information</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>IP address, device ID, browser type, and operating system.</li>
              <li>Access logs and activity timestamps for security and analytics.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">d. Usage Information</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>How merchants use the Sayar dashboard, WhatsApp automations, or connected services.</li>
              <li>Preferences, feedback, and responses to surveys or support requests.</li>
            </ul>
          </section>

          <hr className="my-12 border-border" />

          {/* Section 3 */}
          <section id="how-we-collect" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">3. How We Collect and Use Information</h2>
            
            <h3 className="text-xl font-semibold mb-4">a. How We Collect</h3>
            <p className="mb-4">We collect data when you:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Register for a Sayar account.</li>
              <li>Connect your WhatsApp Business number.</li>
              <li>Use our dashboard or automation features.</li>
              <li>Contact us for support or participate in beta programs.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">b. How We Use Your Data</h3>
            <p className="mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Create and manage your account.</li>
              <li>Deliver our core services — including order management and automation.</li>
              <li>Communicate important updates about your account or features.</li>
              <li>Improve our products, user experience, and customer support.</li>
              <li>Comply with applicable legal and regulatory obligations.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">c. Legal Basis</h3>
            <p className="mb-4">Our legal bases for processing your information include:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Contractual necessity</strong> — to provide the Sayar services you signed up for.</li>
              <li><strong>Consent</strong> — where required, such as for marketing or communications.</li>
              <li><strong>Legal obligation</strong> — to meet regulatory or financial compliance.</li>
              <li><strong>Legitimate interest</strong> — to protect our systems, prevent fraud, and analyze platform performance.</li>
            </ul>
          </section>

          <hr className="my-12 border-border" />

          {/* Section 4 */}
          <section id="information-disclosure" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">4. Information Disclosure</h2>
            <p className="mb-6">We may share your information in the following limited situations:</p>
            
            <p className="mb-4">
              <strong>a. With Trusted Partners</strong> — e.g., payment processors (Paystack, Korapay), hosting providers, analytics tools, and logistics partners, strictly to support service delivery.
            </p>

            <p className="mb-4">
              <strong>b. Legal and Compliance Requirements</strong> — if required by law, court order, or to protect the rights and safety of users or the company.
            </p>

            <p className="mb-4">
              <strong>c. Business Transfers</strong> — in the event of a merger, acquisition, or asset sale, your information may be transferred to the new entity under the same privacy obligations.
            </p>

            <p className="font-semibold">
              We do not sell, rent, or trade your personal data to third parties for their own marketing purposes.
            </p>
          </section>

          <hr className="my-12 border-border" />

          {/* Section 5 */}
          <section id="managing-information" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">5. Managing Your Information</h2>
            
            <h3 className="text-xl font-semibold mb-4">a. Data Security</h3>
            <p className="mb-6">
              We use encryption, firewalls, and secure access controls to protect your personal data. Only authorized personnel can access sensitive information, and they are bound by confidentiality agreements.
            </p>

            <h3 className="text-xl font-semibold mb-4">b. Data Retention</h3>
            <p className="mb-6">
              We retain your data only for as long as necessary to provide our services or comply with legal requirements. When you close your account, we delete or anonymize your data within 90 days unless required to retain it longer for regulatory or tax obligations.
            </p>

            <h3 className="text-xl font-semibold mb-4">c. Third-party Links and Services</h3>
            <p className="mb-6">
              Sayar may contain links to external sites (e.g., payment gateways or partner dashboards). We are not responsible for the privacy practices or content of such third-party services. You are encouraged to review their privacy policies.
            </p>
          </section>

          <hr className="my-12 border-border" />

          {/* Section 6 */}
          <section id="cookies" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">6. Cookies</h2>
            <p className="mb-4">We use cookies and similar tracking technologies to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Keep you signed in to your account.</li>
              <li>Measure and analyze platform usage.</li>
              <li>Personalize content and improve performance.</li>
            </ul>
            <p>
              You can disable cookies in your browser, but doing so may affect your experience using the Sayar dashboard.
            </p>
          </section>

          <hr className="my-12 border-border" />

          {/* Section 7 */}
          <section id="your-rights" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">7. Your Rights</h2>
            <p className="mb-4">Under applicable data protection laws, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Request access to your personal data.</li>
              <li>Request correction or deletion of your data.</li>
              <li>Withdraw consent where processing is based on consent.</li>
              <li>Object to or restrict processing of your data.</li>
              <li>Request transfer (portability) of your data.</li>
            </ul>
            <p>
              You can exercise any of these rights by contacting our Data Protection Officer (DPO) at{" "}
              <a href="mailto:legal@sayar.africa" className="text-primary hover:underline">
                legal@sayar.africa
              </a>.
            </p>
          </section>

          <hr className="my-12 border-border" />

          {/* Section 8 */}
          <section id="changes" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">8. Changes to this Privacy Policy</h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes in law or our business practices. The latest version will always be posted on this page with the updated effective date. Where changes materially affect your rights, we will notify you via email or in-app notice before they take effect.
            </p>
          </section>

          <hr className="my-12 border-border" />

          {/* Section 9 */}
          <section id="contact" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">9. Contact Us</h2>
            <p className="mb-4">
              For questions, requests, or complaints regarding this Privacy Policy, please contact:
            </p>
            <div className="bg-accent/30 rounded-lg p-6">
              <p className="font-semibold mb-2">Data Protection Officer (DPO)</p>
              <p>Sayar Digital Innovations Ltd</p>
              <p>
                Email:{" "}
                <a href="mailto:legal@sayar.africa" className="text-primary hover:underline">
                  legal@sayar.africa
                </a>
              </p>
              <p>Lagos, Nigeria</p>
            </div>
          </section>
          </div>
        </div>

        {/* Back to home 
        <div className="mt-16 pt-8 border-t">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            ← Back to Home
          </Link>
        </div>
        */}
      </div>
    </div>
  );
}

