import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Roles', href: '#roles' },
  { name: 'AI', href: '#ferry' },
  { name: 'Integrations', href: '#integrations' },
  { name: 'Team', href: '#team' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
              <span className="text-background font-bold text-sm">F</span>
            </div>
            <span className="font-semibold text-lg">Fennec</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://app.fennecapp.com/"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              Log in
            </a>
            <a
              href="https://cal.com/vishaldesh/product-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-accent text-background text-sm font-medium hover:bg-accent-light transition-colors"
            >
              Book Demo
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-text-secondary"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border"
          >
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm text-text-secondary hover:text-text-primary"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://app.fennecapp.com/"
                className="block text-sm text-text-secondary hover:text-text-primary"
              >
                Log in
              </a>
              <a
                href="https://cal.com/vishaldesh/product-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 rounded-lg bg-accent text-background text-sm font-medium text-center"
              >
                Book Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
