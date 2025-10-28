import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container max-w-7xl py-12 px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Terms of Service</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">
            📄 Terms of Service
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
              <a href="#acceptance" className="block py-2 text-sm text-muted-foreground hover:text-foreground">
                1. Acceptance of Terms
              </a>
              <a href="#services" className="block py-2 text-sm text-muted-foreground hover:text-foreground">
                2. Description of Services
              </a>
              <a href="#account" className="block py-2 text-sm text-muted-foreground hover:text-foreground">
                3. Your Account
              </a>
              <a href="#acceptable-use" className="block py-2 text-sm text-muted-foreground hover:text-foreground">
                4. Acceptable Use
              </a>
              <a href="#payments" className="block py-2 text-sm text-muted-foreground hover:text-foreground">
                5. Payments and Fees
              </a>
              <a href="#intellectual-property" className="block py-2 text-sm text-muted-foreground hover:text-foreground">
                6. Intellectual Property
              </a>
              <a href="#liability" className="block py-2 text-sm text-muted-foreground hover:text-foreground">
                7. Limitation of Liability
              </a>
              <a href="#indemnification" className="block py-2 text-sm text-muted-foreground hover:text-foreground">
                8. Indemnification
              </a>
              <a href="#changes" className="block py-2 text-sm text-muted-foreground hover:text-foreground">
                9. Changes to Terms
              </a>
              <a href="#governing-law" className="block py-2 text-sm text-muted-foreground hover:text-foreground">
                10. Governing Law
              </a>
              <a href="#contact" className="block py-2 text-sm text-muted-foreground hover:text-foreground">
                Contact Us
              </a>
            </nav>
          </aside>

          {/* Content */}
          <div className="prose prose-slate max-w-none">
            <section id="overview" className="mb-12">
            <p className="text-lg leading-relaxed mb-8">
              Welcome to Sayar! These Terms of Service ("Terms") govern your use of the Sayar platform and services. By signing up for Sayar or using our services, you agree to these Terms. Please read them carefully.
            </p>
          </section>

          <hr className="my-12 border-border" />

          {/* Section 1 */}
          <section id="acceptance" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">1. Acceptance of Terms</h2>
            <p>
              By accessing or using Sayar's services, you confirm that you are at least 18 years old and have the legal capacity to enter into these Terms. If you are using Sayar on behalf of a business or organization, you represent that you have the authority to bind that entity to these Terms.
            </p>
          </section>

          <hr className="my-12 border-border" />

          {/* Section 2 */}
          <section id="services" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">2. Description of Services</h2>
            <p className="mb-4">
              Sayar provides a digital commerce platform that enables merchants to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Automate sales and order management through WhatsApp</li>
              <li>Manage customer interactions and product catalogs</li>
              <li>Process payments through integrated payment providers</li>
              <li>Track orders and business analytics</li>
            </ul>
            <p>
              We reserve the right to modify, suspend, or discontinue any part of our services at any time with reasonable notice.
            </p>
          </section>

          <hr className="my-12 border-border" />

          {/* Section 3 */}
          <section id="account" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">3. Your Account</h2>
            
            <h3 className="text-xl font-semibold mb-4">Account Registration</h3>
            <p className="mb-6">
              To use Sayar, you must create an account by providing accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>

            <h3 className="text-xl font-semibold mb-4">Account Security</h3>
            <p className="mb-6">
              You must notify us immediately of any unauthorized access or security breach. Sayar is not liable for any loss resulting from unauthorized use of your account.
            </p>

            <h3 className="text-xl font-semibold mb-4">Account Termination</h3>
            <p>
              You may close your account at any time. We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent, harmful, or illegal activities.
            </p>
          </section>

          <hr className="my-12 border-border" />

          {/* Section 4 */}
          <section id="acceptable-use" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">4. Acceptable Use</h2>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Use Sayar for any illegal or unauthorized purpose</li>
              <li>Violate any laws in your jurisdiction</li>
              <li>Infringe on intellectual property rights of others</li>
              <li>Upload malicious code or attempt to breach our security</li>
              <li>Engage in fraud, spam, or deceptive practices</li>
              <li>Harass, abuse, or harm other users</li>
            </ul>
            <p>
              Violation of these rules may result in immediate account suspension or termination.
            </p>
          </section>

          <hr className="my-12 border-border" />

          {/* Section 5 */}
          <section id="payments" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">5. Payments and Fees</h2>
            
            <h3 className="text-xl font-semibold mb-4">Pricing</h3>
            <p className="mb-6">
              Sayar is currently free for early waitlist members during our pre-launch phase. Once we launch, we will charge a small commission on sales processed through the platform. You will be notified of any pricing changes in advance.
            </p>

            <h3 className="text-xl font-semibold mb-4">Payment Processing</h3>
            <p className="mb-6">
              Payments from your customers are processed through third-party payment providers (Paystack, Korapay). You are responsible for complying with the terms of these payment providers.
            </p>

            <h3 className="text-xl font-semibold mb-4">Refunds</h3>
            <p>
              All fees paid to Sayar are non-refundable unless otherwise stated or required by law.
            </p>
          </section>

          <hr className="my-12 border-border" />

          {/* Section 6 */}
          <section id="intellectual-property" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">6. Intellectual Property</h2>
            
            <h3 className="text-xl font-semibold mb-4">Sayar's Rights</h3>
            <p className="mb-6">
              All content, features, and functionality of the Sayar platform (including but not limited to software, text, graphics, logos, and trademarks) are owned by Sayar Digital Innovations Ltd and are protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h3 className="text-xl font-semibold mb-4">Your Content</h3>
            <p>
              You retain ownership of any content you upload to Sayar (product listings, images, descriptions). By using our services, you grant us a license to use, display, and process this content to provide our services to you.
            </p>
          </section>

          <hr className="my-12 border-border" />

          {/* Section 7 */}
          <section id="liability" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">7. Limitation of Liability</h2>
            <p className="mb-6">
              To the maximum extent permitted by law, Sayar and its affiliates, officers, employees, and partners will not be liable for any indirect, incidental, special, or consequential damages arising from:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Use or inability to use our services</li>
              <li>Unauthorized access to your account or data</li>
              <li>Errors, interruptions, or delays in service</li>
              <li>Third-party actions or content</li>
            </ul>
            <p>
              Our total liability for any claim related to Sayar will not exceed the amount you paid us in the 12 months prior to the claim, or ₦50,000, whichever is greater.
            </p>
          </section>

          <hr className="my-12 border-border" />

          {/* Section 8 */}
          <section id="indemnification" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">8. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Sayar and its affiliates from any claims, damages, losses, or expenses (including legal fees) arising from your use of our services, your violation of these Terms, or your violation of any rights of others.
            </p>
          </section>

          <hr className="my-12 border-border" />

          {/* Section 9 */}
          <section id="changes" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">9. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. We will notify you of material changes via email or through the platform. Your continued use of Sayar after changes take effect constitutes acceptance of the updated Terms.
            </p>
          </section>

          <hr className="my-12 border-border" />

          {/* Section 10 */}
          <section id="governing-law" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">10. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the Federal Republic of Nigeria. Any disputes will be resolved in the courts of Lagos State, Nigeria.
            </p>
          </section>

          <hr className="my-12 border-border" />

          {/* Section 11 */}
          <section id="contact" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">11. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="bg-accent/30 rounded-lg p-6">
              <p className="font-semibold mb-2">Sayar Digital Innovations Ltd</p>
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

