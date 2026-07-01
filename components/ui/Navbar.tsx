"use client";

import Link from "next/link";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Explore",
    href: "/explore",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
   name: "Generate",
   href: "/generate",
},
  {
   name: "Email",
   href: "/email",
},
  {
   name: "Blog Generator",
   href: "/blog-generator",
},
  {
   name: "Summarize",
   href: "/summarize",
}
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-gray-400">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link href="/" className="text-2xl font-bold text-blue-600">
          AI Studio
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Side */}

        <div className="hidden gap-3 md:flex">
          <Link
            href="/login"
            className="rounded-md border px-4 py-2"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-md bg-blue-600 px-4 py-2 text-white"
          >
            Register
          </Link>
        </div>

      </div>
    </header>
  );
}