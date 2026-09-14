import { ArrowUpRight, ArrowRight } from 'lucide-react'

const wordmark = './images/fennec-wordmark-light.png'

const productLinks = [
  { name: 'Floor plan editor', href: 'https://www.fennecapp.com/product/floor-plans' },
  { name: 'Live event ops', href: 'https://www.fennecapp.com/product/live-ops' },
  { name: 'Bottle service', href: 'https://www.fennecapp.com/product/bottle-service' },
  { name: 'Guestlist & ticketing', href: 'https://www.fennecapp.com/product/ticketing' },
  { name: 'Guest CRM', href: 'https://www.fennecapp.com/product/crm' },
  { name: 'Ferry AI', href: 'https://www.fennecapp.com/product/ferry-ai' },
]

const operationsLinks = [
  { name: 'Promoter portal', href: 'https://www.fennecapp.com/product/promoters' },
  { name: 'Inventory dashboard', href: 'https://www.fennecapp.com/product/inventory-dashboard' },
  { name: 'POS integration', href: 'https://www.fennecapp.com/product/pos-integration' },
  { name: 'Ticketing integrations', href: 'https://www.fennecapp.com/product/ticketing-integrations' },
  { name: 'Discover Events', href: 'https://www.fennecapp.com/product/discover-events' },
  { name: 'Fennec Pass', href: 'https://www.fennecapp.com/product/fennec-pass' },
]

const resourceLinks = [
  { name: 'Docs', href: 'https://www.fennecapp.com/docs' },
  { name: 'About', href: 'https://www.fennecapp.com/about' },
  { name: 'Login', href: 'https://app.fennecapp.com/' },
  { name: 'Privacy policy', href: 'https://web.fennecapp.com/privacy-policy' },
  { name: 'Terms of service', href: 'https://web.fennecapp.com/terms-of-service' },
]

function FooterLink({ name, href }: { name: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {name} <ArrowUpRight size={13} aria-hidden="true" />
    </a>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand-block">
            <a href="#top" className="brand" aria-label="Fennec home">
              <img src={wordmark} alt="Fennec" />
              <span>Hospitality OS</span>
            </a>
            <p>The operating system for premium venues. Floor, doors, bottles, guests — all in one.</p>
            <a className="footer-cta" href="#waitlist">Join the waitlist <ArrowRight size={15} /></a>
          </div>

          <div className="footer-links-column"><h3>Product</h3>{productLinks.map((link) => <FooterLink key={link.name} {...link} />)}</div>
          <div className="footer-links-column"><h3>Operations</h3>{operationsLinks.map((link) => <FooterLink key={link.name} {...link} />)}</div>
          <div className="footer-links-column"><h3>Company</h3>{resourceLinks.map((link) => <FooterLink key={link.name} {...link} />)}</div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Fennec. All rights reserved.</span>
          <span>Made for the night.</span>
        </div>
      </div>
    </footer>
  )
}
