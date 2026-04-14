export const metadata = {
  title: 'Privacy Policy',
  description: 'Selfpause privacy policy — how we collect, use, protect, and share your personal information, including our audio data practices.',
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative bg-cream-100 pt-24 pb-12 lg:pt-32 lg:pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-navy-500">Last updated: April 14, 2026</p>
        </div>
      </section>

      <article className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* ── 1. INTRODUCTION ── */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">1. Introduction</h2>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              Selfpause (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, retain, and safeguard your information when you use our mobile application, website, and related services (collectively, the &ldquo;Service&rdquo;).
            </p>
            <p className="text-navy-700 text-lg leading-relaxed">
              By accessing or using the Service, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy and our <a href="/terms" className="text-teal-500 underline hover:text-teal-600">Terms of Service</a>. If you do not agree to this Privacy Policy, please do not use the Service.
            </p>
          </section>

          {/* ── 2. DEFINITIONS ── */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">2. Definitions</h2>
            <ul className="list-disc pl-6 space-y-3 text-navy-700 text-lg leading-relaxed">
              <li><strong>&ldquo;Personal Information&rdquo;</strong> means any information that identifies or could reasonably be used to identify you as an individual, including your name, email address, device identifiers, and IP address.</li>
              <li><strong>&ldquo;Audio Data&rdquo;</strong> means voice recordings, affirmation recordings, and any other audio content you create using the Service.</li>
              <li><strong>&ldquo;Anonymized Audio Data&rdquo;</strong> means Audio Data that has been irreversibly de-identified through technical processes so that it can no longer be linked, directly or indirectly, to any specific individual. Anonymized Audio Data is not considered Personal Information.</li>
              <li><strong>&ldquo;De-identification&rdquo;</strong> means the process by which we remove, obscure, or transform Audio Data to strip all personally identifiable characteristics, including but not limited to metadata, user identifiers, account information, geolocation markers, and any information that could be used to reconstruct or identify the original speaker.</li>
              <li><strong>&ldquo;Usage Data&rdquo;</strong> means information automatically collected about how you interact with the Service, including device type, operating system, session duration, and feature usage.</li>
              <li><strong>&ldquo;Third-Party Data Partners&rdquo;</strong> means companies or organizations that receive Anonymized Audio Data from us for the purposes described in Section 6 of this Privacy Policy.</li>
            </ul>
          </section>

          {/* ── 3. INFORMATION WE COLLECT ── */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">3. Information We Collect</h2>

            <h3 className="text-lg font-semibold text-navy-800 mb-2 mt-6">3.1 Personal Information</h3>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              When you create an account, we may collect your name, email address, and profile information. If you subscribe to a premium plan, our third-party payment processors (Apple App Store, Google Play Store, or Stripe) handle your payment information &mdash; we do not store credit card numbers or full payment details.
            </p>

            <h3 className="text-lg font-semibold text-navy-800 mb-2 mt-6">3.2 Audio Data</h3>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              When you use our recording features, your voice recordings and affirmation audio are collected and stored. Audio Data stored locally on your device is not accessible to us unless you enable cloud sync or other features that transmit Audio Data to our servers.
            </p>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              When cloud sync is enabled or Audio Data is otherwise transmitted to our servers, we store it securely using encryption at rest and in transit. We use your Audio Data to provide and improve the Service, and, subject to the terms described in <strong>Section 6 (Anonymized Audio Data Program)</strong>, we may create Anonymized Audio Data from your recordings for the purposes described therein.
            </p>

            <h3 className="text-lg font-semibold text-navy-800 mb-2 mt-6">3.3 Usage Data</h3>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              We automatically collect information about how you interact with the Service, including device type, operating system, app version, session duration, feature usage, crash logs, and performance metrics. This data helps us improve the app experience.
            </p>

            <h3 className="text-lg font-semibold text-navy-800 mb-2 mt-6">3.4 Cookies and Tracking Technologies</h3>
            <p className="text-navy-700 text-lg leading-relaxed">
              Our website may use cookies, web beacons, and similar tracking technologies to collect information about your browsing behavior. You may manage your cookie preferences through your browser settings. For more detail, see Section 12.
            </p>
          </section>

          {/* ── 4. HOW WE USE YOUR INFORMATION ── */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">4. How We Use Your Information</h2>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 text-navy-700 text-lg leading-relaxed">
              <li><strong>Service delivery:</strong> To provide, maintain, operate, and improve the Service, including storing and playing back your affirmation recordings</li>
              <li><strong>Personalization:</strong> To personalize your experience and deliver relevant content and recommendations</li>
              <li><strong>Transactions:</strong> To process transactions, manage subscriptions, and send billing-related communications</li>
              <li><strong>Communication:</strong> To send you service updates, security alerts, product announcements, and support messages</li>
              <li><strong>Analytics:</strong> To analyze usage trends, monitor performance, and optimize the Service</li>
              <li><strong>Security:</strong> To detect, prevent, and address fraud, abuse, technical issues, or violations of our Terms of Service</li>
              <li><strong>Research and development:</strong> To conduct internal research and develop new features, products, or services</li>
              <li><strong>Anonymized Audio Data Program:</strong> To create Anonymized Audio Data for the purposes described in Section 6, subject to your right to opt out</li>
              <li><strong>Legal compliance:</strong> To comply with applicable laws, regulations, legal processes, or governmental requests</li>
            </ul>
          </section>

          {/* ── 5. DATA SHARING & THIRD PARTIES ── */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">5. Data Sharing &amp; Third Parties</h2>

            <h3 className="text-lg font-semibold text-navy-800 mb-2 mt-6">5.1 Personal Information</h3>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              We do not sell, trade, or rent your Personal Information (including your name, email, or identifiable account data) to third parties. We may share limited Personal Information with trusted service providers who help us operate the Service, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-navy-700 text-lg leading-relaxed">
              <li><strong>Analytics providers</strong> (e.g., Google Analytics, Mixpanel) to understand app usage patterns</li>
              <li><strong>Cloud infrastructure providers</strong> (e.g., AWS, Google Cloud) for secure data storage and processing</li>
              <li><strong>Payment processors</strong> (Apple, Google, Stripe) for subscription and payment management</li>
              <li><strong>Customer support tools</strong> to help us respond to your inquiries</li>
            </ul>
            <p className="text-navy-700 text-lg leading-relaxed mt-4">
              These providers are contractually obligated to protect your data, process it only on our behalf, and may not use it for their own purposes.
            </p>

            <h3 className="text-lg font-semibold text-navy-800 mb-2 mt-6">5.2 Anonymized Audio Data</h3>
            <p className="text-navy-700 text-lg leading-relaxed">
              We may share Anonymized Audio Data with Third-Party Data Partners as described in Section 6 below. Because Anonymized Audio Data has been irreversibly de-identified, it is not considered Personal Information under applicable privacy laws.
            </p>

            <h3 className="text-lg font-semibold text-navy-800 mb-2 mt-6">5.3 Legal Requirements</h3>
            <p className="text-navy-700 text-lg leading-relaxed">
              We may disclose your information if required to do so by law, regulation, or legal process, or if we believe in good faith that disclosure is necessary to protect our rights, your safety, the safety of others, investigate fraud, or respond to a government request.
            </p>

            <h3 className="text-lg font-semibold text-navy-800 mb-2 mt-6">5.4 Business Transfers</h3>
            <p className="text-navy-700 text-lg leading-relaxed">
              In the event of a merger, acquisition, reorganization, bankruptcy, or sale of all or a portion of our assets, your information (including Audio Data) may be transferred as part of that transaction. We will notify you via email or prominent notice on the Service of any change in ownership or uses of your information.
            </p>
          </section>

          {/* ── 6. ANONYMIZED AUDIO DATA PROGRAM ── */}
          <section className="bg-cream-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-8 rounded-2xl border border-cream-300">
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">6. Anonymized Audio Data Program</h2>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              This section describes our practices regarding the creation, use, and sharing of Anonymized Audio Data. <strong>Please read this section carefully.</strong>
            </p>

            <h3 className="text-lg font-semibold text-navy-800 mb-2 mt-6">6.1 What We Do</h3>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              We may create Anonymized Audio Data from voice recordings that users submit through the Service. This Anonymized Audio Data may be licensed or sold to Third-Party Data Partners for the sole purpose of <strong>general-purpose audio model training</strong>, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-navy-700 text-lg leading-relaxed">
              <li>Speech recognition and natural language processing research</li>
              <li>Audio quality enhancement and noise reduction model training</li>
              <li>General acoustic model development</li>
              <li>Audio classification and segmentation research</li>
              <li>Other legitimate machine learning and artificial intelligence research purposes</li>
            </ul>

            <h3 className="text-lg font-semibold text-navy-800 mb-2 mt-6">6.2 How We Anonymize Audio Data</h3>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              Before any Audio Data is shared with Third-Party Data Partners, we apply rigorous de-identification procedures designed to make it impossible to identify or re-identify the original speaker. These procedures include, but are not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-navy-700 text-lg leading-relaxed">
              <li><strong>Metadata stripping:</strong> All user identifiers, account information, timestamps, device identifiers, IP addresses, geolocation data, and file metadata are permanently removed</li>
              <li><strong>Content separation:</strong> Audio clips are segmented, shuffled, and separated from any contextual information about the user, their account, or their usage patterns</li>
              <li><strong>Aggregate pooling:</strong> Audio data is pooled into large, mixed datasets containing recordings from many different users, making individual identification impractical</li>
              <li><strong>No linked records:</strong> We do not maintain any mapping, index, key, or reference table that could link Anonymized Audio Data back to a specific user, account, or original recording</li>
            </ul>

            <h3 className="text-lg font-semibold text-navy-800 mb-2 mt-6">6.3 Prohibited Uses &mdash; No Voice Cloning</h3>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              <strong>We contractually prohibit all Third-Party Data Partners from using Anonymized Audio Data for any of the following purposes:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-navy-700 text-lg leading-relaxed">
              <li><strong>Voice cloning or voice synthesis:</strong> Creating synthetic replicas of any individual&apos;s voice, vocal identity, or speaking style</li>
              <li><strong>Speaker identification or re-identification:</strong> Attempting to identify, profile, or re-identify any individual speaker from the Anonymized Audio Data</li>
              <li><strong>Biometric profiling:</strong> Using the data to create biometric templates, voiceprints, or speaker embeddings tied to an identifiable individual</li>
              <li><strong>Deepfake creation:</strong> Generating synthetic audio that imitates or impersonates any individual</li>
              <li><strong>Surveillance or tracking:</strong> Using the data for surveillance, law enforcement identification, or any form of individual tracking</li>
              <li><strong>Discriminatory purposes:</strong> Using the data in any way that discriminates against individuals based on race, ethnicity, gender, religion, or any other protected characteristic</li>
            </ul>
            <p className="text-navy-700 text-lg leading-relaxed mt-4">
              These prohibitions are enforced through binding contractual agreements with all Third-Party Data Partners. Any violation of these terms constitutes a material breach of our data licensing agreements and may result in immediate termination of the data license, monetary penalties, and legal action.
            </p>

            <h3 className="text-lg font-semibold text-navy-800 mb-2 mt-6">6.4 Your Right to Opt Out</h3>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              <strong>You have the right to opt out of the Anonymized Audio Data Program at any time.</strong> If you opt out:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-navy-700 text-lg leading-relaxed">
              <li>We will not create any new Anonymized Audio Data from your future recordings</li>
              <li>Your existing Audio Data will be excluded from future anonymization batches</li>
              <li>Your use of the Service will not be affected in any way &mdash; opting out does not limit your access to any features</li>
              <li>Because Anonymized Audio Data is, by definition, no longer linked to any individual, we cannot retrieve or delete Anonymized Audio Data that was created and shared before you opted out. However, no future data will be included</li>
            </ul>
            <p className="text-navy-700 text-lg leading-relaxed mt-4">
              <strong>To opt out,</strong> you may:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-navy-700 text-lg leading-relaxed">
              <li>Toggle the &ldquo;Audio Data Sharing&rdquo; setting to &ldquo;Off&rdquo; in your account settings within the app</li>
              <li>Email us at <a href="mailto:privacy@selfpause.com" className="text-teal-500 underline hover:text-teal-600">privacy@selfpause.com</a> with the subject line &ldquo;Opt Out of Audio Data Program&rdquo;</li>
            </ul>
            <p className="text-navy-700 text-lg leading-relaxed mt-4">
              We will process opt-out requests within 15 business days of receipt.
            </p>

            <h3 className="text-lg font-semibold text-navy-800 mb-2 mt-6">6.5 Consent</h3>
            <p className="text-navy-700 text-lg leading-relaxed">
              By using the Service and submitting Audio Data (including enabling cloud sync or any feature that transmits audio to our servers), you acknowledge and consent to the creation of Anonymized Audio Data and its use as described in this Section 6, subject to your right to opt out at any time as described in Section 6.4. This consent is provided freely and may be withdrawn at any time without penalty.
            </p>
          </section>

          {/* ── 7. DATA RETENTION ── */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">7. Data Retention</h2>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              We retain your Personal Information and identifiable Audio Data for as long as your account is active or as needed to provide you with the Service. If you delete your account:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-navy-700 text-lg leading-relaxed">
              <li>We will delete or anonymize your Personal Information within 30 days</li>
              <li>We will delete your identifiable Audio Data from our servers within 30 days</li>
              <li>Anonymized Audio Data that has already been created and shared cannot be recalled, as it is no longer linked to your account or identity</li>
              <li>We may retain certain data where required by law, regulation, or legitimate legal obligation (e.g., tax records, dispute resolution)</li>
            </ul>
          </section>

          {/* ── 8. DATA SECURITY ── */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">8. Data Security</h2>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              We implement industry-standard security measures to protect your Personal Information and Audio Data, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-navy-700 text-lg leading-relaxed">
              <li>Encryption in transit (TLS 1.2+/SSL) and encryption at rest (AES-256)</li>
              <li>Access controls limiting employee access to user data on a need-to-know basis</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Secure data centers with physical security controls</li>
              <li>Incident response procedures for data breaches</li>
            </ul>
            <p className="text-navy-700 text-lg leading-relaxed mt-4">
              However, no method of electronic transmission or storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.
            </p>
          </section>

          {/* ── 9. YOUR RIGHTS ── */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">9. Your Rights</h2>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              Depending on your jurisdiction, you may have the following rights regarding your Personal Information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-navy-700 text-lg leading-relaxed">
              <li><strong>Right of access:</strong> Request a copy of the Personal Information we hold about you</li>
              <li><strong>Right to rectification:</strong> Request correction of inaccurate or incomplete Personal Information</li>
              <li><strong>Right to deletion:</strong> Request deletion of your Personal Information and identifiable Audio Data</li>
              <li><strong>Right to restriction:</strong> Request that we restrict the processing of your Personal Information in certain circumstances</li>
              <li><strong>Right to portability:</strong> Request a machine-readable copy of your Personal Information</li>
              <li><strong>Right to object:</strong> Object to the processing of your Personal Information for certain purposes, including the Anonymized Audio Data Program</li>
              <li><strong>Right to withdraw consent:</strong> Withdraw your consent at any time where processing is based on consent, without affecting the lawfulness of processing prior to withdrawal</li>
              <li><strong>Right to opt out of data sales:</strong> Opt out of the sale or sharing of your data as described in Section 6.4 and Section 10</li>
              <li><strong>Right to non-discrimination:</strong> Exercise any of these rights without receiving discriminatory treatment from us</li>
            </ul>
            <p className="text-navy-700 text-lg leading-relaxed mt-4">
              To exercise any of these rights, please contact us at <a href="mailto:privacy@selfpause.com" className="text-teal-500 underline hover:text-teal-600">privacy@selfpause.com</a>. We will respond to verified requests within 30 days (or as required by applicable law).
            </p>
          </section>

          {/* ── 10. CALIFORNIA PRIVACY RIGHTS (CCPA/CPRA) ── */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">10. California Privacy Rights (CCPA/CPRA)</h2>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), as amended by the California Privacy Rights Act (CPRA):
            </p>

            <h3 className="text-lg font-semibold text-navy-800 mb-2 mt-6">10.1 Categories of Information Collected</h3>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">In the preceding 12 months, we have collected the following categories of personal information:</p>
            <ul className="list-disc pl-6 space-y-2 text-navy-700 text-lg leading-relaxed">
              <li><strong>Identifiers:</strong> Name, email address, device identifiers, IP address</li>
              <li><strong>Internet activity:</strong> App usage data, browsing history on our website, feature interactions</li>
              <li><strong>Audio information:</strong> Voice recordings and affirmation audio created through the Service</li>
              <li><strong>Inferences:</strong> Preferences and characteristics derived from usage patterns</li>
            </ul>

            <h3 className="text-lg font-semibold text-navy-800 mb-2 mt-6">10.2 Sale or Sharing of Personal Information</h3>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              Under the CCPA/CPRA, the term &ldquo;sale&rdquo; includes the disclosure of personal information to a third party for monetary or other valuable consideration. While we do not sell identifiable Personal Information, our Anonymized Audio Data Program (Section 6) may constitute a &ldquo;sale&rdquo; under the broad CCPA definition because we receive compensation for providing Anonymized Audio Data to Third-Party Data Partners. Out of an abundance of caution, we treat this program as a potential &ldquo;sale&rdquo; for CCPA purposes.
            </p>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              <strong>Your Right to Opt Out of Sale:</strong> California residents have the right to opt out of the &ldquo;sale&rdquo; of their personal information. You may exercise this right by following the opt-out instructions in Section 6.4 or by contacting us at <a href="mailto:privacy@selfpause.com" className="text-teal-500 underline hover:text-teal-600">privacy@selfpause.com</a>.
            </p>

            <h3 className="text-lg font-semibold text-navy-800 mb-2 mt-6">10.3 Do Not Sell or Share My Personal Information</h3>
            <p className="text-navy-700 text-lg leading-relaxed">
              We honor &ldquo;Do Not Sell or Share My Personal Information&rdquo; requests. If you make such a request, we will exclude your Audio Data from the Anonymized Audio Data Program going forward and will not share your identifiable information with third parties for cross-context behavioral advertising.
            </p>

            <h3 className="text-lg font-semibold text-navy-800 mb-2 mt-6">10.4 Authorized Agents</h3>
            <p className="text-navy-700 text-lg leading-relaxed">
              You may designate an authorized agent to submit privacy requests on your behalf. We may require verification of the agent&apos;s authority and your identity before processing such requests.
            </p>
          </section>

          {/* ── 11. EEA/UK RESIDENTS (GDPR) ── */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">11. European Economic Area &amp; UK Residents (GDPR)</h2>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, the following additional provisions apply:
            </p>

            <h3 className="text-lg font-semibold text-navy-800 mb-2 mt-6">11.1 Legal Bases for Processing</h3>
            <ul className="list-disc pl-6 space-y-2 text-navy-700 text-lg leading-relaxed">
              <li><strong>Contract performance:</strong> Processing necessary to provide you with the Service (account management, audio storage, playback)</li>
              <li><strong>Consent:</strong> Processing based on your explicit consent, including the Anonymized Audio Data Program. You may withdraw consent at any time</li>
              <li><strong>Legitimate interests:</strong> Processing for analytics, security, and service improvement, where these interests are not overridden by your rights</li>
              <li><strong>Legal obligation:</strong> Processing necessary to comply with applicable laws</li>
            </ul>

            <h3 className="text-lg font-semibold text-navy-800 mb-2 mt-6">11.2 International Data Transfers</h3>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              Your data may be transferred to and processed in the United States or other countries outside the EEA/UK. When we transfer data internationally, we ensure appropriate safeguards are in place, including Standard Contractual Clauses (SCCs) approved by the European Commission or other legally recognized transfer mechanisms.
            </p>

            <h3 className="text-lg font-semibold text-navy-800 mb-2 mt-6">11.3 Data Protection Authority</h3>
            <p className="text-navy-700 text-lg leading-relaxed">
              You have the right to lodge a complaint with your local data protection authority if you believe we have violated your data protection rights.
            </p>
          </section>

          {/* ── 12. COOKIES ── */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">12. Cookies &amp; Tracking Technologies</h2>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              Our website uses cookies and similar technologies to enhance your browsing experience. Types of cookies we may use include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-navy-700 text-lg leading-relaxed">
              <li><strong>Essential cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with the website</li>
              <li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
            </ul>
            <p className="text-navy-700 text-lg leading-relaxed mt-4">
              You can manage cookie preferences through your browser settings. Disabling cookies may affect certain features of the website.
            </p>
          </section>

          {/* ── 13. CHILDREN ── */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">13. Children&apos;s Privacy</h2>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              The Service is not directed to children under the age of 13 (or 16 in the EEA/UK). We do not knowingly collect Personal Information or Audio Data from children under these ages. If you believe a child has provided us with personal data, please contact us at <a href="mailto:privacy@selfpause.com" className="text-teal-500 underline hover:text-teal-600">privacy@selfpause.com</a> and we will promptly delete it.
            </p>
            <p className="text-navy-700 text-lg leading-relaxed">
              Audio Data from children is never included in the Anonymized Audio Data Program, regardless of opt-in/opt-out status.
            </p>
          </section>

          {/* ── 14. CHANGES ── */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">14. Changes to This Privacy Policy</h2>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or for other operational, legal, or regulatory reasons.
            </p>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              <strong>For material changes</strong> (including any changes to the Anonymized Audio Data Program), we will provide prominent notice through one or more of the following methods:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-navy-700 text-lg leading-relaxed">
              <li>In-app notification</li>
              <li>Email notification to the address associated with your account</li>
              <li>Prominent notice on our website</li>
            </ul>
            <p className="text-navy-700 text-lg leading-relaxed mt-4">
              Material changes will take effect 30 days after notification. Your continued use of the Service after the effective date constitutes your acceptance of the revised policy. If you do not agree with any changes, you may opt out of the Anonymized Audio Data Program or delete your account.
            </p>
          </section>

          {/* ── 15. CONTACT ── */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">15. Contact Us</h2>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="text-navy-700 text-lg leading-relaxed bg-cream-50 p-6 rounded-xl border border-cream-300">
              <p><strong>Selfpause</strong></p>
              <p className="mt-2">General inquiries: <a href="mailto:support@selfpause.com" className="text-teal-500 underline hover:text-teal-600">support@selfpause.com</a></p>
              <p>Privacy &amp; data requests: <a href="mailto:privacy@selfpause.com" className="text-teal-500 underline hover:text-teal-600">privacy@selfpause.com</a></p>
              <p>Opt-out requests: <a href="mailto:privacy@selfpause.com" className="text-teal-500 underline hover:text-teal-600">privacy@selfpause.com</a> (subject: &ldquo;Opt Out of Audio Data Program&rdquo;)</p>
            </div>
          </section>

        </div>
      </article>
    </>
  );
}
