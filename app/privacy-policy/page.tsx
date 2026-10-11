import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Phytogenic Life Science collects, uses and protects information submitted through this website.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-xl font-semibold text-forest-950 sm:text-2xl">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-sage-700">
        {children}
      </div>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-forest-900 to-forest-950 py-20 text-center text-white">
        <div className="container-custom">
          <span className="section-eyebrow bg-white/10 text-sage-100">
            <ShieldCheck className="h-3.5 w-3.5" /> Legal
          </span>
          <h1 className="mt-5 font-display text-3xl font-semibold sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-sage-200">
            Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-custom max-w-3xl space-y-10">
          <p className="text-sm leading-relaxed text-sage-700">
            Phytogenic Life Science (&quot;Phytogenic&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;)
            operates phytogenic.co.in (the &quot;Site&quot;). This policy explains what
            information we collect when you use the Site, how we use it, and
            the choices you have. By using the Site, you agree to the
            practices described here.
          </p>

          <Section title="1. Information We Collect">
            <p>
              We only collect information you choose to give us. The main way
              this happens is the enquiry form on our{" "}
              <span className="font-semibold text-forest-800">Contact</span>{" "}
              page, where we ask for your name, email address, phone number
              and message.
            </p>
            <p>
              We do not require account registration, do not process payments
              on the Site, and do not knowingly collect sensitive personal
              data (such as financial details, health information, or
              government ID numbers) through the Site.
            </p>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>
              Information submitted through the Contact form is used solely
              to respond to your enquiry — for example, to send product
              information, samples, quotations, or to get in touch about a
              potential business partnership. When you submit the form, we
              send an email notification to our sales team and a confirmation
              email to the address you provided, acknowledging that your
              request has been received.
            </p>
            <p>
              We do not sell, rent, or trade your personal information to
              third parties, and we do not use it for unrelated marketing
              without your consent.
            </p>
          </Section>

          <Section title="3. How Your Information Is Sent &amp; Stored">
            <p>
              Enquiry emails are delivered using a third-party email provider
              (Google Workspace / Gmail SMTP) acting on our behalf solely to
              transmit the message to our sales inbox and to send you a
              confirmation email. We do not maintain a separate marketing
              database of enquiry submissions; your message is retained in
              our business email inbox for as long as reasonably necessary to
              respond to and follow up on your enquiry, consistent with our
              standard business records practices.
            </p>
          </Section>

          <Section title="4. Product &amp; Collection Data">
            <p>
              Product names, descriptions, categories and images shown on the
              Site are sourced from our internal product catalog system and
              are used only to present our range of herbal extracts, natural
              actives and speciality chemicals. Browsing this catalog does
              not require you to submit any personal information.
            </p>
          </Section>

          <Section title="5. Cookies &amp; Tracking">
            <p>
              The Site does not currently use advertising or analytics
              cookies to track you across other websites. Your browser may
              store minor technical data (such as cached page assets) purely
              to make the Site load faster on repeat visits; this is not used
              to identify you personally.
            </p>
          </Section>

          <Section title="6. Third-Party Links">
            <p>
              The Site may link to third-party resources, such as our social
              media profiles. We are not responsible for the privacy
              practices of websites we do not operate — please review their
              own privacy policies before sharing information with them.
            </p>
          </Section>

          <Section title="7. Your Rights &amp; Choices">
            <p>
              You may ask us to access, correct, or delete the information
              you have submitted to us, or withdraw consent for us to contact
              you, at any time by emailing{" "}
              <a href="mailto:sales@phytogenic.co.in" className="font-semibold text-forest-700 hover:text-forest-900">
                sales@phytogenic.co.in
              </a>
              . We will respond to reasonable requests within a reasonable
              timeframe.
            </p>
          </Section>

          <Section title="8. Children's Privacy">
            <p>
              The Site is intended for business use by adults representing
              companies interested in our products, and is not directed at
              children. We do not knowingly collect information from
              children.
            </p>
          </Section>

          <Section title="9. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes to our practices. Any updates will be posted on this
              page with a revised &quot;Last updated&quot; date.
            </p>
          </Section>

          <Section title="10. Contact Us">
            <p>
              If you have questions about this Privacy Policy or how your
              information is handled, please contact us:
            </p>
            <p>
              Phytogenic Life Science<br />
              Landmark Cyber Park, 3rd floor, Sector 67, Gurugram, Haryana 122002<br />
              <a href="mailto:sales@phytogenic.co.in" className="font-semibold text-forest-700 hover:text-forest-900">
                sales@phytogenic.co.in
              </a>{" "}
              · +91-9599177616
            </p>
          </Section>
        </div>
      </section>
    </>
  );
}
