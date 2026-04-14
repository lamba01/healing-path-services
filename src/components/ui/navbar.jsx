"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
// import logo from '../../public/images/llo.jpg'

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 w-full z-50 bg-olive-500 shadow-md overflow-y-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-18 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-xl font-semibold text-white tracking-tight"
        >
          <Image
            src="/images/logo2.png"
            alt="Healing Path Logo"
            width={150}
            height={0}
            className="inline-block mr-2 "
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200
                  ${pathname === l.href ? "text-coral" : "text-white hover:text-coral"}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="px-5 py-2 capitalize border rounded border-white text-white text-sm font-medium tracking-widest hover:bg-olive-600 hover:text-olive transition-all duration-200"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-3 z-50 relative"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-stone-200 px-6 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-700 py-1 hover:text-coral transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-stone-100">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block text-center py-2 bg-olive-500 text-white capitalize text-sm font-medium hover:bg-coral transition-all duration-200"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
