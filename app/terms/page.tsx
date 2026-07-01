export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">
        Terms & Conditions
      </h1>

      <div className="space-y-6 text-gray-600 leading-8">
        <p>
          By using AI Content Studio, you agree to comply with our terms and
          conditions.
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-black mb-2">
            Acceptable Use
          </h2>

          <p>
            Users must not misuse our services or generate harmful, illegal, or
            misleading content.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-black mb-2">
            Account Responsibility
          </h2>

          <p>
            You are responsible for maintaining the confidentiality of your
            account credentials.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-black mb-2">
            Changes
          </h2>

          <p>
            We reserve the right to update these terms at any time.
          </p>
        </section>
      </div>
    </main>
  );
}