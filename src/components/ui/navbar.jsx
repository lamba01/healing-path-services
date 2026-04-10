'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import '@/app/globals.css'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])


  return (
    <nav className={`fixed top-0 w-full z-50 transition-all bg-olive-500  duration-300 
      ${scrolled ? 'backdrop-blur-md shadow-sm' : ' backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-18 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="font-serif text-[1.65rem] font-semibold text-ink tracking-tight">
          healing path psychotherapy services
          {/* <Image src="/logo.png" alt="NovexCapital Logo" width={70} height={20} /> */}
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 text-white
                  ${pathname === l.href ? 'text-gold' : 'text-ink-soft hover:text-gold'}`}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex gap-3 items-center">
          <Link href="/"
            className="px-5 py-2 capitalize border rounded border-ink text-ink text-sm font-medium tracking-widest
              hover:bg-ink text-white transition-all duration-200 hover:bg-olive-600">
                book appointment
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu">
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-stone-200 px-6 py-5 flex flex-col gap-4">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className="text-sm font-medium text-ink-soft py-1 hover:text-gold transition-colors"
              onClick={() => setMenuOpen(false)}>
              {l.label}
            </Link>
          ))}
          <div className="flex gap-3 pt-3 border-t border-stone-100">
            <Link href="/" className="flex-1 text-center py-2.5 bg-olive-500 capitalize border border-ink text-ink text-sm font-medium hover:bg-ink hover:text-white hover:bg-ink text-white transition-all duration-200 hover:bg-olive-600">book appointment</Link>
          </div>
        </div>
      )}
    </nav>
  )
}