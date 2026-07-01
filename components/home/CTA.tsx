import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-blue-600 py-20 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-bold">
          Ready to Create Amazing AI Content?
        </h2>

        <p className="mt-5 text-lg text-blue-100">
          Start generating blogs, emails, captions and summaries with AI today.
        </p>

        <Link
          href="/register"
          className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 transition hover:bg-gray-100"
        >
          Get Started Free
        </Link>
      </div>
    </section>
  );
}