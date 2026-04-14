import Link from "next/link"

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

const socials = [
  { label: 'Instagram', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'LinkedIn', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-olive-500 text-white px-6 lg:px-10 py-16">
      <div className="max-w-7xl mx-auto">

        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/20">

          {/* BRAND */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-serif">
              Healing Path <br />
              <span className="text-coral-500">Psychotherapy Services</span>
            </h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              A safe, compassionate space for healing, growth and self-discovery. 
              You don&apos;t have to walk this journey alone.
            </p>
          </div>

          {/* NAV LINKS */}
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-coral-500">
              Quick Links
            </p>
            <ul className="space-y-2">
              {links.map(l => (
                <li key={l.href}>
                  <Link href={l.href}
                    className="text-white/60 text-sm hover:text-coral-500 transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* BOOKING + SOCIALS */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-widest text-coral-500">
                Book a Session
              </p>
              <div className="flex flex-col gap-2">
                <a href="#" target="_blank" rel="noopener noreferrer"
                  className="text-white/60 text-sm hover:text-coral-500 transition-colors duration-200">
                  Psychology Today →
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer"
                  className="text-white/60 text-sm hover:text-coral-500 transition-colors duration-200">
                  Jane App →
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-widest text-coral-500">
                Follow Us
              </p>
              <div className="flex gap-4">
                {socials.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="text-white/60 text-sm hover:text-coral transition-colors duration-200">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Healing Path Psychotherapy Services. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Designed with care.
          </p>
        </div>

      </div>
    </footer>
  )
}