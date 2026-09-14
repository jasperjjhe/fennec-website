import { ArrowRight } from 'lucide-react'

const wordmark = './images/fennec-wordmark-light.png'

const productLinks = [
  { name: 'Platform', href: '#platform' },
  { name: 'Screenshots', href: '#proof' },
  { name: 'Integrations', href: '#integrations' },
  { name: 'Ferry AI', href: '#ferry' },
  { name: 'Guest experience', href: '#guests' },
  { name: 'Join the waitlist', href: '#waitlist' },
]

const operationsLinks = [
  { name: 'Floor operations', href: '#platform' },
  { name: 'Door & scanning', href: '#proof' },
  { name: 'Promoters', href: '#roles' },
  { name: 'Inventory', href: '#platform' },
  { name: 'POS & ticketing', href: '#integrations' },
  { name: 'The Fennec Pass', href: '#guests' },
]

const companyLinks = [
  { name: 'The shift', href: '#roles' },
  { name: 'Inside Fennec', href: '#proof' },
  { name: 'Early access', href: '#waitlist' },
  { name: 'Back to top', href: '#top' },
]

function FooterLink({ name, href }: { name: string; href: string }) {
  return (
    <a href={href}>
      {name} <ArrowRight size={13} aria-hidden="true" />
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
          <div className="footer-links-column"><h3>Company</h3>{companyLinks.map((link) => <FooterLink key={link.name} {...link} />)}</div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Fennec. All rights reserved.</span>
          <span>Made for the night.</span>
        </div>
      </div>
    </footer>
  )
}
