import { Twitter, Linkedin, Instagram } from 'lucide-react'

const footerLinks = {
  Product: [
    { name: 'Features', href: '#features' },
    { name: 'Integrations', href: '#integrations' },
    { name: 'Book Demo', href: 'https://cal.com/vishaldesh/product-demo' },
  ],
  Solutions: [
    { name: 'Nightclubs', href: '#features' },
    { name: 'Lounges', href: '#features' },
    { name: 'Rooftops', href: '#features' },
    { name: 'Day Clubs', href: '#features' },
    { name: 'Multi-Venue', href: '#features' },
  ],
  Company: [
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: 'mailto:hello@fennecapp.com' },
    { name: 'Privacy', href: 'https://fennecapp.com/privacy' },
    { name: 'Terms', href: 'https://fennecapp.com/terms' },
  ],
}

export function Footer() {
  return (
    <footer className="py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
                <span className="text-background font-bold text-sm">F</span>
              </div>
              <span className="font-semibold text-lg">Fennec</span>
            </a>
            <p className="text-sm text-text-muted mb-4">
              The venue operating system for nightlife that never sleeps.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com/fennecapp" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://linkedin.com/company/fennecapp" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://instagram.com/fennecapp" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-medium mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-text-muted hover:text-text-primary transition-colors"
                      {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} Fennec. All rights reserved.
          </p>
          <p className="text-sm text-text-muted">
            We live nightlife. We know tech.
          </p>
        </div>
      </div>
    </footer>
  )
}
