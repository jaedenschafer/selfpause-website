export const metadata = {
  title: 'Privacy Policy',
  description: 'Selfpause privacy policy — how we collect, use, and protect your personal information.',
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative bg-cream-100 pt-24 pb-12 lg:pt-32 lg:pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-navy-500">Last updated: March 30, 2026</p>
        </div>
      </section>

      <article className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">1. Introduction</h2>
            <p className="text-navy-700 text-lg leading-relaxed">
              Selfpause (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website (collectively, the &ldquo;Service&rdquo;). By using the Service, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">2. Information We Collect</h2>
            <h3 className="text-lg font-semibold text-navy-800 mb-2">Personal Information</h3>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              When you create an account, we may collect your name, email address, and profile information. If you subscribe to a premium plan, our third-party payment processors (Apple App Store, Google Play Store, or Stripe) handle your payment information &mdash; we do not store credit card numbers.
            </p>
            <h3 className="text-lg font-semibold text-navy-800 mb-2">Usage Data</h3>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              We automatically collect information about how you interact with the Service, including device type, operating system, app version, session duration, and feature usage. This helps us improve the app experience.
            </p>
            <h3 className="text-lg font-semibold text-navy-800 mb-2">Audio Recordings</h3>
            <p className="text-navy-700 text-lg leading-relaxed">
              If you use our recording feature, your audio affirmations are stored locally on your device by default. If you enable cloud sync, recordings are encrypted and stored securely on our servers. We never access, listen to, or share your recordings.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-navy-700 text-lg leading-relaxed">
              <li>To provide, maintain, and improve the Service</li>
              <li>To personalize your experience and deliver relevant content</li>
              <li>To process transactions and manage subscriptions</li>
              <li>To send you updates, security alerts, and support messages</li>
              <li>To analyze usage trends and optimize performance</li>
              <li>To detect, prevent, and address technical issues or fraud</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">4. Data Sharing &amp; Third Parties</h2>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share limited data with trusted service providers who help us operate the Service, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-navy-700 text-lg leading-relaxed">
              <li><strong>Analytics providers</strong> (e.g., Google Analytics, Mixpanel) to understand app usage</li>
              <li><strong>Cloud infrastructure</strong> (e.g., AWS, Google Cloud) for secure data storage</li>
              <li><strong>Payment processors</strong> (Apple, Google, Stripe) for subscription management</li>
            </ul>
            <p className="text-navy-700 text-lg leading-relaxed mt-4">
              These providers are contractually obligated to protect your data and may only use it to provide services to us.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">5. Data Retention</h2>
            <p className="text-navy-700 text-lg leading-relaxed">
              We retain your personal information for as long as your account is active or as needed to provide you with the Service. If you delete your account, we will delete or anonymize your data within 30 days, except where we are required to retain it for legal or regulatory purposes.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">6. Data Security</h2>
            <p className="text-navy-700 text-lg leading-relaxed">
              We implement industry-standard security measures, including encryption in transit (TLS/SSL) and at rest, to protect your personal information. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">7. Your Rights</h2>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              Depending on your jurisdiction, you may have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-navy-700 text-lg leading-relaxed">
              <li>Access, correct, or delete your personal data</li>
              <li>Object to or restrict certain processing activities</li>
              <li>Request a portable copy of your data</li>
              <li>Withdraw consent at any time (where processing is based on consent)</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
            <p className="text-navy-700 text-lg leading-relaxed mt-4">
              To exercise any of these rights, please contact us at <a href="mailto:support@selfpause.com" className="text-teal-500 underline hover:text-teal-600">support@selfpause.com</a>.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">8. Children&apos;s Privacy</h2>
            <p className="text-navy-700 text-lg leading-relaxed">
              The Service is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal data, please contact us and we will promptly delete it.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">9. Changes to This Policy</h2>
            <p className="text-navy-700 text-lg leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on this page and updating the &ldquo;Last updated&rdquo; date. Your continued use of the Service after changes are posted constitutes your acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">10. Contact Us</h2>
            <p className="text-navy-700 text-lg leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-navy-700 text-lg leading-relaxed mt-2">
              <strong>Selfpause</strong><br />
              Email: <a href="mailto:support@selfpause.com" className="text-teal-500 underline hover:text-teal-600">support@selfpause.com</a>
            </p>
          </section>

        </div>
      </article>
    </>
  );
}
