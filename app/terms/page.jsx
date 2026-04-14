export const metadata = {
  title: 'Terms of Service',
  description: 'Selfpause terms of service — the rules, guidelines, and legal agreements for using our app, website, and services, including our audio data licensing terms.',
  robots: { index: true, follow: true },
};

export default function TermsOfServicePage() {
  return (
    <>
      <section className="relative bg-cream-100 pt-24 pb-12 lg:pt-32 lg:pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-navy-500">Last updated: April 14, 2026</p>
        </div>
      </section>

      <article className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* ── 1. ACCEPTANCE ── */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              By downloading, installing, accessing, or using the Selfpause mobile application, website, or any related services (collectively, the &ldquo;Service&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;), our <a href="/privacy" className="text-teal-500 underline hover:text-teal-600">Privacy Policy</a>, and any additional terms or policies referenced herein.
            </p>
            <p className="text-navy-700 text-lg leading-relaxed">
              If you do not agree to these Terms, you must not access or use the Service. We reserve the right to update these Terms at any time. Material changes will be communicated via in-app notification, email, or prominent notice on the Service at least 30 days before taking effect. Your continued use of the Service after the effective date of any changes constitutes your acceptance of the revised Terms.
            </p>
          </section>

          {/* ── 2. DEFINITIONS ── */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">2. Definitions</h2>
            <ul className="list-disc pl-6 space-y-3 text-navy-700 text-lg leading-relaxed">
              <li><strong>&ldquo;User,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;</strong> refers to any individual who accesses or uses the Service.</li>
              <li><strong>&ldquo;Selfpause,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;</strong> refers to Selfpause, its owners, officers, employees, and affiliates.</li>
              <li><strong>&ldquo;User Content&rdquo;</strong> means any content you create, upload, record, or submit through the Service, including but not limited to voice recordings, affirmation text, custom audio, profile information, and personal settings.</li>
              <li><strong>&ldquo;Audio Data&rdquo;</strong> means all voice recordings, affirmation recordings, and other audio content you create using the Service.</li>
              <li><strong>&ldquo;Anonymized Audio Data&rdquo;</strong> means Audio Data that has been irreversibly de-identified through technical processes so that it can no longer be linked, directly or indirectly, to any specific individual. Anonymized Audio Data is not considered User Content or Personal Information.</li>
            </ul>
          </section>

          {/* ── 3. DESCRIPTION ── */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">3. Description of Service</h2>
            <p className="text-navy-700 text-lg leading-relaxed">
              Selfpause is a personal wellness application that allows users to record personalized affirmations in their own voice, listen to guided affirmation sessions, layer ambient sounds and music, and access AI-powered coaching features. The Service is available on iOS, Android, and the web. The Service is a wellness tool and is not a substitute for professional medical advice, diagnosis, or treatment.
            </p>
          </section>

          {/* ── 4. ACCOUNT ── */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">4. Account Registration</h2>
            <p className="text-navy-700 text-lg leading-relaxed">
              To access certain features, you may need to create an account. You agree to: (a) provide accurate, current, and complete information during registration; (b) maintain and promptly update your account information; (c) keep your account credentials secure and confidential; and (d) accept responsibility for all activity that occurs under your account. If you suspect unauthorized access, please contact us immediately at <a href="mailto:support@selfpause.com" className="text-teal-500 underline hover:text-teal-600">support@selfpause.com</a>.
            </p>
          </section>

          {/* ── 5. SUBSCRIPTIONS ── */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">5. Subscriptions &amp; Payments</h2>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              Selfpause offers both free and premium subscription plans. Premium subscriptions are billed through the Apple App Store, Google Play Store, or our website, depending on your platform.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-navy-700 text-lg leading-relaxed">
              <li><strong>Free trial:</strong> If offered, your free trial will automatically convert to a paid subscription unless you cancel before the trial period ends.</li>
              <li><strong>Renewal:</strong> Subscriptions automatically renew at the end of each billing period unless cancelled at least 24 hours before the renewal date.</li>
              <li><strong>Cancellation:</strong> You can cancel your subscription at any time through your device&apos;s app store settings or your account settings on our website. Cancellation takes effect at the end of the current billing period.</li>
              <li><strong>Refunds:</strong> Refund requests are handled by the respective app store in accordance with their refund policies. For web subscriptions, please contact us within 7 days of purchase.</li>
              <li><strong>Price changes:</strong> We may change subscription prices at any time. Price changes take effect at the start of the next billing period following notice.</li>
            </ul>
          </section>

          {/* ── 6. USER CONTENT & OWNERSHIP ── */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">6. User Content &amp; Ownership</h2>

            <h3 className="text-lg font-semibold text-navy-800 mb-2 mt-6">6.1 Your Ownership</h3>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              You retain full ownership of all User Content you create through the Service, including your recorded affirmations, custom text, and personal settings. Nothing in these Terms transfers ownership of your original User Content to Selfpause.
            </p>

            <h3 className="text-lg font-semibold text-navy-800 mb-2 mt-6">6.2 Service License</h3>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              By using the Service and submitting User Content (including enabling cloud sync or any feature that transmits content to our servers), you grant Selfpause a limited, non-exclusive, royalty-free, worldwide license to store, process, transmit, cache, and display your User Content solely for the purpose of providing, maintaining, and improving the Service for you. This license terminates when you delete your User Content or your account.
            </p>

            <h3 className="text-lg font-semibold text-navy-800 mb-2 mt-6">6.3 Anonymized Audio Data License</h3>
            <div className="bg-cream-50 p-6 rounded-xl border border-cream-300">
              <p className="text-navy-700 text-lg leading-relaxed mb-4">
                <strong>IMPORTANT &mdash; PLEASE READ CAREFULLY.</strong> In addition to the Service License described in Section 6.2, by using the Service and submitting Audio Data, you grant Selfpause a <strong>perpetual, irrevocable, non-exclusive, royalty-free, worldwide, fully sublicensable license</strong> to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-navy-700 text-lg leading-relaxed mb-4">
                <li>Create Anonymized Audio Data from your Audio Data by applying the de-identification procedures described in our Privacy Policy (Section 6.2)</li>
                <li>Use, reproduce, distribute, sublicense, and commercially exploit the resulting Anonymized Audio Data for <strong>general-purpose audio model training</strong> and related research purposes</li>
                <li>License or sell the resulting Anonymized Audio Data to third parties for the same permitted purposes</li>
              </ul>
              <p className="text-navy-700 text-lg leading-relaxed mb-4">
                <strong>This license applies only to Anonymized Audio Data</strong> &mdash; audio that has been irreversibly stripped of all identifying information as described in our Privacy Policy. This license does not grant Selfpause any rights to your identifiable Audio Data beyond the Service License described in Section 6.2.
              </p>
              <p className="text-navy-700 text-lg leading-relaxed mb-4">
                <strong>Prohibited uses:</strong> Selfpause contractually prohibits all third-party recipients of Anonymized Audio Data from using it for voice cloning, voice synthesis, speaker identification or re-identification, biometric profiling, deepfake creation, surveillance, or any discriminatory purpose. See our Privacy Policy (Section 6.3) for the full list of prohibited uses.
              </p>
              <p className="text-navy-700 text-lg leading-relaxed">
                <strong>Your right to opt out:</strong> You may opt out of the Anonymized Audio Data Program at any time without affecting your use of the Service, as described in our Privacy Policy (Section 6.4). Opting out will prevent the creation of new Anonymized Audio Data from your future recordings. Because Anonymized Audio Data is, by definition, no longer linked to any individual, data that has already been anonymized and distributed cannot be recalled.
              </p>
            </div>
          </section>

          {/* ── 7. ACCEPTABLE USE ── */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">7. Acceptable Use</h2>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              You agree not to use the Service to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-navy-700 text-lg leading-relaxed">
              <li>Violate any applicable local, state, national, or international law or regulation</li>
              <li>Infringe on the intellectual property rights of others</li>
              <li>Upload or transmit malicious code, viruses, or harmful content</li>
              <li>Attempt to gain unauthorized access to our systems, servers, networks, or other users&apos; accounts</li>
              <li>Use the Service for any unauthorized commercial purpose without our prior written consent</li>
              <li>Reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code of any part of the Service</li>
              <li>Interfere with or disrupt the integrity or performance of the Service</li>
              <li>Collect, harvest, or store personal information of other users</li>
              <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
            </ul>
          </section>

          {/* ── 8. IP ── */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">8. Intellectual Property</h2>
            <p className="text-navy-700 text-lg leading-relaxed">
              All content, features, and functionality of the Service &mdash; including but not limited to text, graphics, logos, audio recordings (excluding User Content), software, algorithms, and design &mdash; are owned by Selfpause and are protected by copyright, trademark, patent, trade secret, and other intellectual property laws. You may not copy, modify, distribute, sell, or create derivative works from any part of the Service without our prior written consent.
            </p>
          </section>

          {/* ── 9. DISCLAIMERS ── */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">9. Disclaimer of Warranties</h2>
            <p className="text-navy-700 text-lg leading-relaxed mb-4 uppercase text-sm font-semibold tracking-wide">
              THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
            </p>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              Selfpause does not warrant that: (a) the Service will be uninterrupted, timely, secure, or error-free; (b) the results obtained from the Service will be accurate or reliable; (c) the quality of any content obtained through the Service will meet your expectations; or (d) any errors in the Service will be corrected.
            </p>
            <p className="text-navy-700 text-lg leading-relaxed">
              <strong>Selfpause is a wellness tool and is not a substitute for professional medical advice, diagnosis, or treatment.</strong> Always seek the advice of a qualified healthcare provider with any questions regarding a medical or mental health condition. Never disregard professional medical advice or delay seeking treatment because of something you have read or heard on the Service.
            </p>
          </section>

          {/* ── 10. LIMITATION OF LIABILITY ── */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">10. Limitation of Liability</h2>
            <p className="text-navy-700 text-lg leading-relaxed mb-4 uppercase text-sm font-semibold tracking-wide">
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, SELFPAUSE AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, SUPPLIERS, AND LICENSORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE SERVICE.
            </p>
            <p className="text-navy-700 text-lg leading-relaxed">
              Our total aggregate liability for any and all claims arising out of or related to these Terms or the Service shall not exceed the greater of: (a) the total amount you paid us in the 12 months preceding the claim; or (b) one hundred U.S. dollars ($100). This limitation applies regardless of the legal theory on which the claim is based.
            </p>
          </section>

          {/* ── 11. INDEMNIFICATION ── */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">11. Indemnification</h2>
            <p className="text-navy-700 text-lg leading-relaxed">
              You agree to indemnify, defend, and hold harmless Selfpause and its affiliates, officers, directors, employees, agents, licensors, and service providers from and against any and all claims, losses, damages, liabilities, costs, and expenses (including reasonable attorneys&apos; fees and court costs) arising out of or related to: (a) your use of or access to the Service; (b) your User Content; (c) your violation of these Terms; (d) your violation of any rights of a third party; or (e) your violation of any applicable law or regulation.
            </p>
          </section>

          {/* ── 12. DISPUTE RESOLUTION ── */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">12. Dispute Resolution &amp; Arbitration</h2>

            <h3 className="text-lg font-semibold text-navy-800 mb-2 mt-6">12.1 Informal Resolution</h3>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              Before initiating any formal dispute resolution, you agree to first contact us at <a href="mailto:support@selfpause.com" className="text-teal-500 underline hover:text-teal-600">support@selfpause.com</a> and attempt to resolve the dispute informally for at least 30 days.
            </p>

            <h3 className="text-lg font-semibold text-navy-800 mb-2 mt-6">12.2 Binding Arbitration</h3>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              If informal resolution is unsuccessful, any dispute, controversy, or claim arising out of or relating to these Terms or the Service shall be settled by binding arbitration in accordance with the rules of the American Arbitration Association (AAA). The arbitration shall take place in Maricopa County, Arizona, unless the parties agree otherwise. The arbitrator&apos;s decision shall be final and binding.
            </p>

            <h3 className="text-lg font-semibold text-navy-800 mb-2 mt-6">12.3 Class Action Waiver</h3>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              You agree that any dispute resolution proceedings will be conducted only on an individual basis and not as a class, consolidated, or representative action. You waive any right to participate in a class action lawsuit or class-wide arbitration against Selfpause.
            </p>

            <h3 className="text-lg font-semibold text-navy-800 mb-2 mt-6">12.4 Exceptions</h3>
            <p className="text-navy-700 text-lg leading-relaxed">
              Notwithstanding the above, either party may seek injunctive or other equitable relief in any court of competent jurisdiction to prevent the actual or threatened infringement, misappropriation, or violation of intellectual property rights or confidential information.
            </p>
          </section>

          {/* ── 13. TERMINATION ── */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">13. Termination</h2>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              We may suspend or terminate your access to the Service at any time, with or without cause, and with or without notice. Upon termination:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-navy-700 text-lg leading-relaxed">
              <li>Your right to use the Service ceases immediately</li>
              <li>We will delete your identifiable User Content within 30 days, subject to our data retention policy</li>
              <li>The Anonymized Audio Data License (Section 6.3) survives termination, as Anonymized Audio Data is no longer linked to your account</li>
              <li>Sections 6.3, 8, 9, 10, 11, 12, and 14 survive termination</li>
            </ul>
            <p className="text-navy-700 text-lg leading-relaxed mt-4">
              You may delete your account at any time through the app settings or by contacting us at <a href="mailto:support@selfpause.com" className="text-teal-500 underline hover:text-teal-600">support@selfpause.com</a>.
            </p>
          </section>

          {/* ── 14. GOVERNING LAW ── */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">14. Governing Law</h2>
            <p className="text-navy-700 text-lg leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the State of Arizona, United States, without regard to its conflict of law provisions. To the extent that arbitration does not apply, any legal action or proceeding arising under these Terms shall be brought exclusively in the state or federal courts located in Maricopa County, Arizona, and you consent to the personal jurisdiction of such courts.
            </p>
          </section>

          {/* ── 15. SEVERABILITY ── */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">15. Severability</h2>
            <p className="text-navy-700 text-lg leading-relaxed">
              If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect. The invalid or unenforceable provision shall be modified to the minimum extent necessary to make it valid and enforceable while preserving the original intent of the provision.
            </p>
          </section>

          {/* ── 16. ENTIRE AGREEMENT ── */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">16. Entire Agreement</h2>
            <p className="text-navy-700 text-lg leading-relaxed">
              These Terms, together with the Privacy Policy and any other legal notices or policies published by us on the Service, constitute the entire agreement between you and Selfpause regarding the Service and supersede all prior agreements, understandings, and communications, whether written or oral.
            </p>
          </section>

          {/* ── 17. CONTACT ── */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">17. Contact Us</h2>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="text-navy-700 text-lg leading-relaxed bg-cream-50 p-6 rounded-xl border border-cream-300">
              <p><strong>Selfpause</strong></p>
              <p className="mt-2">General inquiries: <a href="mailto:support@selfpause.com" className="text-teal-500 underline hover:text-teal-600">support@selfpause.com</a></p>
              <p>Privacy &amp; data requests: <a href="mailto:privacy@selfpause.com" className="text-teal-500 underline hover:text-teal-600">privacy@selfpause.com</a></p>
              <p>Legal inquiries: <a href="mailto:legal@selfpause.com" className="text-teal-500 underline hover:text-teal-600">legal@selfpause.com</a></p>
            </div>
          </section>

        </div>
      </article>
    </>
  );
}
