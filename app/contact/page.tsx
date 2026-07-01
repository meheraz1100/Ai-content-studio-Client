export default function ContactPage() {
  return (
    <main className="max-w-6xl mx-auto py-20 px-6">

      <h1 className="text-4xl font-bold text-center mb-12">
        Contact Us
      </h1>

      <div className="grid lg:grid-cols-2 gap-12">

        {/* Form */}

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg p-3"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg p-3"
          />

          <textarea
            rows={6}
            placeholder="Message"
            className="w-full border rounded-lg p-3"
          />

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            Send Message
          </button>

        </form>

        {/* Contact Info */}

        <div className="space-y-8">

          <div>
            <h3 className="font-bold text-xl">
              Email
            </h3>

            <p className="text-gray-600">
              support@aicontentstudio.com
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl">
              Phone
            </h3>

            <p className="text-gray-600">
              +1 (123) 456-7890
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl">
              Address
            </h3>

            <p className="text-gray-600">
              123 Innovation Street
              <br />
              San Francisco, CA
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}