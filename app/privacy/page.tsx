export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

      <div className="space-y-6 text-gray-600 leading-8">
        <p>
          Your privacy is important to us. This Privacy Policy explains how AI
          Content Studio collects, uses, and protects your personal information.
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-black mb-2">
            Information We Collect
          </h2>

          <p>
            We may collect your name, email address, and account information
            necessary to provide our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-black mb-2">
            How We Use Your Information
          </h2>

          <p>
            We use your information to improve our platform, provide customer
            support, and enhance user experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-black mb-2">
            Data Security
          </h2>

          <p>
            We implement industry-standard security practices to safeguard your
            information.
          </p>
        </section>
      </div>
    </main>
  );
}