import Link from "next/link";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-between gap-10 px-6 py-16 md:flex-row">
      {/* Left Content */}
      <div className="max-w-2xl">
        <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-600">
          🚀 AI Powered Content Creation
        </span>

        <h1 className="mt-6 text-5xl font-bold leading-tight">
          Create Amazing Content
          <span className="text-blue-600"> with AI</span>
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Generate blogs, captions, emails, summaries, and more using powerful
          AI tools. Save time and boost your productivity.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="/explore"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Explore Templates
          </Link>

          <Link
            href="/register"
            className="rounded-lg border px-6 py-3 font-semibold transition hover:bg-gray-100"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex justify-center">
        
        <Image
  src="https://plus.unsplash.com/premium_photo-1725907643701-9ba38affe7bb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  alt="AI Illustration"
  width={700}
  height={500}
  className="rounded-2xl shadow-xl"
/>
      </div>
    </section>
  );
}