import type { Metadata } from "next";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "The terms that govern your use of the Phytogenic Life Science website.",
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

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-forest-900 to-forest-950 py-20 text-center text-white">
        <div className="container-custom">
          <span className="section-eyebrow bg-white/10 text-sage-100">
            <FileText className="h-3.5 w-3.5" /> Legal
          </span>
          <h1 className="mt-5 font-display text-3xl font-semibold sm:text-5xl">
            Terms and Conditions
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-sage-200">
            Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-custom max-w-3xl space-y-10">
          <p className="text-sm leading-relaxed text-sage-700">
            These Terms and Conditions (&quot;Terms&quot;) govern your access
            to and use of phytogenic.co.in (the &quot;Site&quot;), operated by
            Phytogenic Life Science (&quot;Phytogenic&quot;, &quot;we&quot;,
            &quot;us&quot;, &quot;our&quot;). By accessing or using the Site,
            you agree to be bound by these Terms. If you do not agree, please
            do not use the Site.
          </p>

          <Section title="1. About This Site">
            <p>
              Phytogenic Life Science is a manufacturer and supplier of
              herbal extracts, natural actives and speciality chemicals for
              the cosmetic and personal care industry. The Site is
              informational and business-to-business in nature: it showcases
              our product range and collections and allows prospective
              customers to submit enquiries. The Site does not process online
              orders or payments.
            </p>
          </Section>

          <Section title="2. Use of the Site">
            <p>
              You agree to use the Site only for lawful purposes and in a way
              that does not infringe the rights of, or restrict or inhibit
              the use and enjoyment of, the Site by any third party. You must
              not misuse the Site by knowingly introducing viruses or other
              malicious material, or attempt to gain unauthorized access to
              any part of the Site, the server on which it is hosted, or any
              connected system.
            </p>
          </Section>

          <Section title="3. Product Information">
            <p>
              We make reasonable efforts to keep product names, descriptions,
              categories and images on the Site accurate and up to date.
              However, product specifications, availability, pricing and
              compliance documentation are confirmed directly through our
              sales team and may differ from what is shown on the Site.
              Nothing on the Site constitutes a binding offer to sell; a
              contract is formed only once we confirm an order or quotation
              with you directly.
            </p>
          </Section>

          <Section title="4. Enquiries &amp; Communications">
            <p>
              When you submit the Contact form, you confirm that the
              information you provide is accurate and that you have the
              right to share it with us. We will use it to respond to your
              enquiry as described in our{" "}
              <a href="/privacy-policy" className="font-semibold text-forest-700 hover:text-forest-900">
                Privacy Policy
              </a>
              .
            </p>
          </Section>

          <Section title="5. Intellectual Property">
            <p>
              Unless otherwise stated, the Site and its content — including
              text, graphics, logos and product imagery — are owned by or
              licensed to Phytogenic Life Science and are protected by
              applicable intellectual property laws. You may view and print
              pages from the Site for your own personal or internal business
              reference, but may not reproduce, republish or redistribute
              content from the Site for commercial purposes without our
              prior written consent.
            </p>
          </Section>

          <Section title="6. Third-Party Links">
            <p>
              The Site may contain links to third-party websites, including
              our social media profiles. We do not control and are not
              responsible for the content, accuracy, or practices of any
              linked third-party site.
            </p>
          </Section>

          <Section title="7. Disclaimer &amp; Limitation of Liability">
            <p>
              The Site is provided on an &quot;as is&quot; and &quot;as
              available&quot; basis. While we take reasonable care to keep
              the Site accurate and available, we do not warrant that it will
              be uninterrupted, error-free, or free of viruses. To the
              fullest extent permitted by law, Phytogenic Life Science shall
              not be liable for any indirect, incidental, or consequential
              loss or damage arising from your use of, or inability to use,
              the Site.
            </p>
          </Section>

          <Section title="8. Changes to These Terms">
            <p>
              We may revise these Terms from time to time. Updates will be
              posted on this page with a revised &quot;Last updated&quot;
              date, and continued use of the Site after changes are posted
              constitutes acceptance of the updated Terms.
            </p>
          </Section>

          <Section title="9. Governing Law">
            <p>
              These Terms are governed by the laws of India, and any disputes
              arising from them shall be subject to the exclusive
              jurisdiction of the courts at Gurugram, Haryana.
            </p>
          </Section>

          <Section title="10. Contact Us">
            <p>
              Questions about these Terms can be sent to:
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
