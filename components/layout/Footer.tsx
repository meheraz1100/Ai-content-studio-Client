import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-900 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <h3 className="text-2xl font-bold text-white">AI Studio</h3>
          <p className="mt-3 text-sm">
            AI-powered platform for creating quality content quickly and
            efficiently.
          </p>
        </div>

        <div>
          <h4 className="mb-3 font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/explore">Explore</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-semibold text-white">Resources</h4>
          <ul className="space-y-2">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/privacy">Privacy</Link></li>
            <li><Link href="/terms">Terms</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-semibold text-white">Contact</h4>
          <p>Email: support@aistudio.com</p>
          <p>Phone: +1 123-456-7890</p>
        </div>
      </div>

      <div className="border-t border-gray-800 py-5 text-center text-sm">
        © 2026 AI Content Studio. All rights reserved.
      </div>
    </footer>
  );
}