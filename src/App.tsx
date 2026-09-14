import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  Building2,
  Calendar,
  Check,
  ChevronDown,
  CreditCard,
  Globe,
  Heart,
  Layout,
  Menu as MenuIcon,
  MessageSquare,
  Package,
  Percent,
  Play,
  Search,
  Share2,
  Sparkles,
  Star,
  Target,
  TicketPercent,
  UserCog,
  Users,
  Wallet,
  Wine,
  Zap,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Footer } from './sections/Footer'

const demoHref = 'https://cal.com/vishaldesh/product-demo'
const image = (fileName: string) => `./images/${fileName}`

type ProductModule = {
  title: string
  description: string
  href: string
  icon: LucideIcon
}

type ProductGroup = {
  label: string
  description: string
  modules: ProductModule[]
}

const productGroups: ProductGroup[] = [
  {
    label: 'Event management',
    description: 'Plan, staff and run the night.',
    modules: [
      {
        title: 'Floor plan editor',
        description: 'Design, version and activate floor layouts with live minimums and VIP zones.',
        href: '#platform',
        icon: Layout,
      },
      {
        title: 'Live event ops',
        description: 'Guestlists, table statuses and seat assignments on one synced canvas.',
        href: '#platform',
        icon: Activity,
      },
      {
        title: 'Bottle service',
        description: 'Packages, deposits, runners and a complete tableside order history.',
        href: '#platform',
        icon: Wine,
      },
      {
        title: 'Guestlist & ticketing',
        description: 'Sell tickets, import lists and check guests in with an offline-ready scanner.',
        href: '#platform',
        icon: TicketPercent,
      },
      {
        title: 'Promoter portal',
        description: 'Trackable links, guestlists, deposits and live commission tracking.',
        href: '#platform',
        icon: Share2,
      },
      {
        title: 'Guest CRM',
        description: 'Unified profiles with lifetime spend, preferences and smart segments.',
        href: '#platform',
        icon: Heart,
      },
      {
        title: 'Automations & comms',
        description: 'Trigger SMS, WhatsApp and email flows from any signal in your venue.',
        href: '#platform',
        icon: MessageSquare,
      },
      {
        title: 'Reports & analytics',
        description: 'Revenue, attendance, table turnover and promoter performance, exportable.',
        href: '#platform',
        icon: BarChart3,
      },
      {
        title: 'Coat Check Management',
        description: 'QR receipts, photo capture and per-guest claim history for a clean rack.',
        href: '#platform',
        icon: Package,
      },
      {
        title: 'Bar Management',
        description: 'Bar-by-bar velocity, staffing and live ticket queues in one console.',
        href: '#platform',
        icon: Building2,
      },
      {
        title: 'Host Events',
        description: 'Build the event, set hold strategies and run the room from one war room.',
        href: '#platform',
        icon: Calendar,
      },
      {
        title: 'Guest Management',
        description: 'RSVPs, comps, plus-ones and birthdays with full history attached.',
        href: '#platform',
        icon: Users,
      },
      {
        title: 'Staff Management',
        description: 'Schedules, clock-in, role permissions and tip distribution on one roster.',
        href: '#platform',
        icon: UserCog,
      },
      {
        title: 'Universal Loyalty',
        description: 'Tiers, points and perks that work across every floor and venue in your group.',
        href: '#platform',
        icon: Star,
      },
      {
        title: 'POS integration',
        description: 'Square, Toast and Lightspeed synced with tickets, tabs and tips.',
        href: '#platform',
        icon: CreditCard,
      },
      {
        title: 'Table Management',
        description: 'Live status, spend, server assignments and turn-time tracking in one tap.',
        href: '#platform',
        icon: Layout,
      },
      {
        title: 'Ticketing integrations',
        description: 'Eventbrite, Showpass, Ora, TicketWeb, POSH, Flite City and Tixr.',
        href: '#platform',
        icon: Globe,
      },
    ],
  },
  {
    label: 'Media management',
    description: 'Posters, campaigns and reach generated from the floor.',
    modules: [
      {
        title: 'Laylo audience sync',
        description: 'Mirror consented guests, RSVPs and opt-outs between Laylo and Fennec.',
        href: '#platform',
        icon: Share2,
      },
      {
        title: 'Meta Pixel & marketing analytics',
        description: 'See which ad filled the room with funnel, spend and return per event.',
        href: '#platform',
        icon: Target,
      },
      {
        title: 'Auto Social Media',
        description: 'Schedule Instagram, TikTok and X posts from the event calendar.',
        href: '#platform',
        icon: Zap,
      },
      {
        title: 'Event Poster Designer',
        description: 'Generate on-brand flyers and stories ready for print, social and Wallet.',
        href: '#platform',
        icon: Sparkles,
      },
      {
        title: 'Drink Campaigns',
        description: 'Push time-boxed promos to staff, menus and social in one shot.',
        href: '#platform',
        icon: Percent,
      },
    ],
  },
  {
    label: 'Inventory management',
    description: 'Stock, menu and loss control without the spreadsheet.',
    modules: [
      {
        title: 'Inventory Dashboard',
        description: 'Live counts, par levels, reorder points and waste flags across every bar.',
        href: '#platform',
        icon: Package,
      },
      {
        title: 'Live Menu Management',
        description: 'Edit once, push everywhere and auto-86 items as stock runs out.',
        href: '#platform',
        icon: Wallet,
      },
      {
        title: 'Stock Room Inventory',
        description: 'Scan-to-count, vendor PO history and variance reconciliation on your phone.',
        href: '#platform',
        icon: Search,
      },
      {
        title: 'In-Bar Inventory',
        description: 'Running bottle and keg counts with one-tap transfers and a full audit trail.',
        href: '#platform',
        icon: Building2,
      },
      {
        title: 'Revenue Loss Calculator',
        description: 'Reconcile pours versus sales and dollarise every variance you find.',
        href: '#platform',
        icon: BarChart3,
      },
    ],
  },
]

const guestModules: ProductModule[] = [
  {
    title: 'Discover Events',
    description: 'A guest-facing feed of every event across the Fennec network.',
    href: '#guests',
    icon: Globe,
  },
  {
    title: 'Live Ordering',
    description: 'Guests scan their table, browse the live menu and order straight to their tab.',
    href: '#guests',
    icon: Wine,
  },
  {
    title: 'The Fennec Pass',
    description: 'One nightlife identity for tickets, tables, loyalty tiers and perks.',
    href: '#guests',
    icon: Wallet,
  },
]

const roles: Array<{
  name: string
  short: string
  description: string
  details: string
  features: string[]
  modules: string[]
  image: string
  imageAlt: string
  icon: LucideIcon
}> = [
  {
    name: 'Owner / GM',
    short: 'O',
    description: 'Run the whole venue from one source of truth.',
    details: 'The numbers that tell the story, with the context to act before the next shift.',
    features: ['Reports & analytics', 'Revenue Loss Calculator', 'Automations & comms'],
    modules: ['Analytics', 'Revenue loss', 'Automations'],
    image: image('hero-tables-live.jpg'),
    imageAlt: 'Fennec live table view for an event manager',
    icon: BarChart3,
  },
  {
    name: 'Host / Door',
    short: 'H',
    description: 'Own the door and the floor without losing the thread.',
    details: 'The right guest, table and arrival detail is always one tap away.',
    features: ['Live guestlist and scanning', 'Table assignments', 'Capacity and arrival view'],
    modules: ['Guestlist', 'Ticketing', 'Live ops'],
    image: image('hero-door.jpg'),
    imageAlt: 'Fennec door operations dashboard',
    icon: Users,
  },
  {
    name: 'Bottle Server',
    short: 'B',
    description: 'More service. Better tips.',
    details: 'See your assigned tables, open a tab, move product and collect payment in the flow.',
    features: ['Assigned tables and spend', 'Bottle and mixer ordering', 'Square Terminal payments'],
    modules: ['Tables', 'Bottle service', 'POS'],
    image: image('hero-bottle.jpg'),
    imageAlt: 'Fennec bottle service dashboard',
    icon: Wine,
  },
  {
    name: 'Bar Manager',
    short: 'BM',
    description: 'Keep every bar moving at the same pace.',
    details: 'Spot the slow well, rebalance staff and know what is running out before it hits revenue.',
    features: ['Bar-by-bar velocity', 'Live ticket queue', 'Stock and menu sync'],
    modules: ['Bars', 'Inventory', 'Live menu'],
    image: image('hero-inventory.jpg'),
    imageAlt: 'Fennec inventory dashboard',
    icon: Building2,
  },
  {
    name: 'Promoter',
    short: 'P',
    description: 'Grow your network. Grow your wallet.',
    details: 'A clear ledger for guests, links, deposits, commissions and performance.',
    features: ['Personal trackable links', 'Guestlist tools', 'Live commission ledger'],
    modules: ['Promoters', 'Guestlist', 'Payouts'],
    image: image('hero-promoters.jpg'),
    imageAlt: 'Fennec promoter portal dashboard',
    icon: Share2,
  },
  {
    name: 'Marketing',
    short: 'M',
    description: 'Turn what happened tonight into tomorrow’s turnout.',
    details: 'Build audiences from real guest behavior and meet them on the channel they actually use.',
    features: ['Guest segments', 'SMS, WhatsApp and email', 'Campaign attribution'],
    modules: ['CRM', 'Campaigns', 'Attribution'],
    image: image('hero-marketing.jpg'),
    imageAlt: 'Fennec marketing dashboard',
    icon: MessageSquare,
  },
  {
    name: 'Floor Lead',
    short: 'F',
    description: 'See the room, then move the room.',
    details: 'A live floor view that makes holds, seating, service and bottlenecks legible.',
    features: ['Live table status', 'Move, merge and block tables', 'Role-aware live view'],
    modules: ['Floor plan', 'Live ops', 'Tables'],
    image: image('hero-tables-live.jpg'),
    imageAlt: 'Fennec live floor plan dashboard',
    icon: Layout,
  },
  {
    name: 'Coat Check',
    short: 'C',
    description: 'Zero tickets lost. Zero arguments.',
    details: 'A tablet-first intake and retrieval flow with a photo and claim history attached to every item.',
    features: ['QR claim tickets', 'Photo capture', 'Per-staff accountability'],
    modules: ['Coat check', 'Guests', 'Fennec Pass'],
    image: image('hero-door.jpg'),
    imageAlt: 'Fennec door and guest operations dashboard',
    icon: Package,
  },
]

const gallery = [
  {
    label: 'Live event ops',
    title: 'The pulse of the night, in one canvas.',
    description: 'Table reservations, live status, arrivals and revenue without switching tools.',
    image: image('hero-tables-live.jpg'),
    alt: 'Fennec live event table dashboard screenshot',
    href: '#proof',
  },
  {
    label: 'Guestlist & ticketing',
    title: 'Doors that flow, not bottleneck.',
    description: 'Tickets, guestlists and offline-ready check-in built for the rush.',
    image: image('hero-ticketing.jpg'),
    alt: 'Fennec ticketing and check-in dashboard screenshot',
    href: '#proof',
  },
  {
    label: 'Promoters',
    title: 'A portal promoters actually use.',
    description: 'Personal links, commissions and guestlists with nothing to reconcile by hand.',
    image: image('hero-promoters.jpg'),
    alt: 'Fennec promoter portal screenshot',
    href: '#proof',
  },
  {
    label: 'Inventory',
    title: 'Every bottle, accounted for.',
    description: 'Counts, reorder points and variance flags across every bar and storage room.',
    image: image('hero-inventory.jpg'),
    alt: 'Fennec inventory dashboard screenshot',
    href: '#proof',
  },
  {
    label: 'Guest CRM',
    title: 'Remember every guest like a regular.',
    description: 'Spend history, preferences and segments that stay connected to every visit.',
    image: image('hero-crm.jpg'),
    alt: 'Fennec guest CRM screenshot',
    href: '#proof',
  },
  {
    label: 'Ferry AI',
    title: 'Meet the crew behind your night.',
    description: 'A command layer for floor ops, guests, campaigns, inventory and service.',
    image: image('hero-ferry.jpg'),
    alt: 'Fennec Ferry AI product screenshot',
    href: '#ferry',
  },
]

const ferryAgents = [
  { name: 'Ferry', role: 'General assistant', description: 'Reads every signal across your venue and answers anything in plain English.', image: image('ferry-agent-blue.png') },
  { name: 'Marketing', role: 'Promos & campaigns', description: 'Drafts campaigns, captions and SMS blasts that match your brand voice.', image: image('ferry-agent-pink.png') },
  { name: 'Inventory', role: 'Stock & bar', description: "Tracks bottles, mixers and 86'd items in real time.", image: image('ferry-agent-green.png') },
  { name: 'Staff', role: 'Promoters & shifts', description: 'Watches promoter performance, shifts and payouts.', image: image('ferry-agent-yellow.png') },
  { name: 'Events', role: 'Ops & live night', description: 'Runs the live floor — tables, guestlist and door flow.', image: image('ferry-agent-red.png') },
]

function ExternalArrow() {
  return <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
}

function Screenshot({
  image,
  alt,
  label,
  title,
  description,
  href,
  className = '',
}: {
  image: string
  alt: string
  label?: string
  title?: string
  description?: string
  href?: string
  className?: string
}) {
  const content = (
    <>
      <div className="screenshot-media">
        <img src={image} alt={alt} loading="lazy" />
        <span className="screenshot-live"><span className="live-dot" /> Live product view</span>
      </div>
      {(label || title || description) && (
        <figcaption className="screenshot-caption">
          {label && <span className="eyebrow eyebrow-small">{label}</span>}
          {title && <h3>{title}</h3>}
          {description && <p>{description}</p>}
          {href && <span className="text-link">Explore module <ExternalArrow /></span>}
        </figcaption>
      )}
    </>
  )

  return (
    <figure className={`screenshot-card ${className}`}>
      {href ? (
        <a href={href} className="screenshot-link">
          {content}
        </a>
      ) : content}
    </figure>
  )
}

function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow: string; title: React.ReactNode; description?: string; light?: boolean }) {
  return (
    <div className={`section-heading ${light ? 'section-heading-light' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

export default function App() {
  const [activeRole, setActiveRole] = useState(roles[0])
  const [submitted, setSubmitted] = useState(false)

  function handleWaitlistSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="brand" aria-label="Fennec home">
            <img src={image('fennec-wordmark-light.png')} alt="Fennec" />
            <span>Hospitality OS</span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#platform">Platform</a>
            <a href="#integrations">Integrations</a>
            <a href="#proof">Screenshots</a>
            <a href="#roles">The shift</a>
            <a href="#ferry">Ferry AI</a>
            <a href="#platform">All modules <ArrowRight size={15} /></a>
          </nav>

          <div className="header-actions">
            <a className="header-login" href="#waitlist">Join the waitlist</a>
            <a className="button button-small button-light" href={demoHref} target="_blank" rel="noopener noreferrer">Book a demo <ArrowRight size={15} /></a>
          </div>

          <button className="mobile-menu-button" type="button" aria-label="Toggle navigation" onClick={(event) => {
            const menu = event.currentTarget.nextElementSibling
            menu?.classList.toggle('mobile-nav-open')
          }}>
            <MenuIcon size={20} />
          </button>
          <div className="mobile-nav">
            <a href="#platform" onClick={(event) => event.currentTarget.parentElement?.classList.remove('mobile-nav-open')}>Platform</a>
            <a href="#integrations" onClick={(event) => event.currentTarget.parentElement?.classList.remove('mobile-nav-open')}>Integrations</a>
            <a href="#proof" onClick={(event) => event.currentTarget.parentElement?.classList.remove('mobile-nav-open')}>Screenshots</a>
            <a href="#roles" onClick={(event) => event.currentTarget.parentElement?.classList.remove('mobile-nav-open')}>The shift</a>
            <a href="#ferry" onClick={(event) => event.currentTarget.parentElement?.classList.remove('mobile-nav-open')}>Ferry AI</a>
            <a href="#platform" onClick={(event) => event.currentTarget.parentElement?.classList.remove('mobile-nav-open')}>All modules <ArrowRight size={15} /></a>
            <a href="#waitlist" onClick={(event) => event.currentTarget.parentElement?.classList.remove('mobile-nav-open')}>Join the waitlist</a>
            <a className="button button-light" href={demoHref} target="_blank" rel="noopener noreferrer" onClick={(event) => event.currentTarget.parentElement?.classList.remove('mobile-nav-open')}>Book a demo <ArrowRight size={15} /></a>
          </div>
        </div>
      </header>

      <main>
        <section id="top" className="hero-section">
          <div className="hero-grid-lines" />
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />
          <div className="container hero-layout">
            <motion.div className="hero-copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <div className="hero-kicker"><span className="live-dot" /> Tonight · Live operations <span className="kicker-divider" /> Venue operating system</div>
              <h1>Every part of the night,<br /><em>on one system.</em></h1>
              <p className="hero-lede">Fennec connects tables, doors, ticketing, bottle service, promoters, inventory and marketing into a single live picture of your venue — so decisions happen during the night, not the week after.</p>
              <div className="hero-actions">
                <a className="button button-primary" href={demoHref} target="_blank" rel="noopener noreferrer">Book a demo <ArrowRight size={17} /></a>
                <a className="button button-quiet" href="#waitlist">Join the waitlist <ArrowRight size={17} /></a>
              </div>
              <div className="hero-metrics" aria-label="Fennec platform metrics">
                <div><strong>28</strong><span>core modules</span></div>
                <div><strong>&lt;1s</strong><span>floor updates</span></div>
                <div><strong>24/7</strong><span>Ferry on shift</span></div>
              </div>
            </motion.div>

            <motion.div className="hero-product" initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.12 }}>
              <div className="product-window product-window-hero">
                <div className="window-bar">
                  <div className="window-dots"><i /><i /><i /></div>
                  <span>fennec / live event ops</span>
                  <span className="window-live"><span className="live-dot" /> connected</span>
                </div>
                <img src={image('hero-tables-live.jpg')} alt="Fennec live event operations dashboard showing tables and revenue" />
                <div className="hero-product-footer">
                  <span>Tables tonight <b>18 / 22 booked</b></span>
                  <span>Door <b>412 checked in</b></span>
                  <span>Bar spend <b>$38,240</b></span>
                </div>
              </div>
              <div className="hero-note"><Bot size={15} /> Ferry AI <span>3 live insights</span> <ArrowUpRight size={14} /></div>
            </motion.div>
          </div>
          <div className="container hero-scroll-cue"><span>Scroll to explore</span><ChevronDown size={17} /></div>
        </section>

        <section className="signal-strip" aria-label="Fennec product areas">
          <div className="container signal-strip-inner">
            <span><b>Tables & floor plan</b> Live seating, holds, minimums</span>
            <span><b>Door & scanning</b> Tickets, guestlists, IDs</span>
            <span><b>Bottle service</b> Packages, deposits, runners</span>
            <span><b>Inventory</b> Counts, transfers, variance</span>
            <span><b>Ferry AI</b> On shift, every night</span>
          </div>
        </section>

        <section id="platform" className="section platform-section">
          <div className="container">
            <SectionHeading
              eyebrow="The operating system"
              title={<>Every part of the night.<br /><span>One system.</span></>}
              description="Fennec connects your entire venue while the night is happening — the floor, the door, the bar and the back office in one live picture."
            />

            <div className="platform-counts">
              <div><strong>28</strong><span>venue modules</span></div>
              <div><strong>3</strong><span>guest experiences</span></div>
              <div><strong>1</strong><span>source of truth</span></div>
              <p>28 core modules for the team on the floor. Discover Events, Live Ordering and the Fennec Pass make the guest side feel just as connected.</p>
            </div>

            <div className="module-groups">
              {productGroups.map((group) => (
                <div className="module-group" key={group.label}>
                  <div className="module-group-heading">
                    <div><span className="eyebrow eyebrow-small">{group.label}</span><h3>{group.description}</h3></div>
                    <span className="module-group-count">{group.modules.length.toString().padStart(2, '0')} modules</span>
                  </div>
                  <div className="module-grid">
                    {group.modules.map((module, index) => {
                      const Icon = module.icon
                      return (
                        <a className="module-card" href={module.href} key={module.title}>
                          <div className="module-card-top"><span className="module-number">{String(index + 1).padStart(2, '0')}</span><Icon size={18} /></div>
                          <h4>{module.title}</h4>
                          <p>{module.description}</p>
                          <span className="module-card-link">Explore <ExternalArrow /></span>
                        </a>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="proof" className="section proof-section">
          <div className="container">
            <div className="proof-heading-row">
              <SectionHeading
                eyebrow="Inside Fennec"
                title={<>Software that shows its work.</>}
                description="These are real product screens from the Fennec OS — not abstract dashboards. Click through to explore each module."
              />
              <a className="text-link text-link-large" href="#platform">See all modules <ArrowRight size={15} /></a>
            </div>
            <div className="gallery-grid">
              {gallery.map((item, index) => (
                <Screenshot key={item.label} {...item} className={index === 0 ? 'screenshot-featured' : ''} />
              ))}
            </div>
          </div>
        </section>

        <section id="integrations" className="integrations-section">
          <div className="container">
            <div className="integrations-heading">
              <div>
                <span className="eyebrow">Connect once</span>
                <h2>Keep selling where you sell.<br /><span>Own the guest in Fennec.</span></h2>
              </div>
              <p>Fennec sits on top of the tools you already use. Orders, tickets, audiences and passes come back to one guest record and one live venue view.</p>
            </div>
            <div className="integration-list" aria-label="Fennec integrations">
              {['Square', 'Toast', 'Lightspeed', 'Eventbrite', 'Showpass', 'Ora', 'TicketWeb', 'POSH', 'Flite City', 'Tixr', 'Laylo', 'Meta Pixel', 'Apple Wallet', 'Google Wallet'].map((name) => <span key={name}>{name}</span>)}
            </div>
            <div className="integration-footnote"><span className="live-dot" /> POS, ticketing, CRM, marketing and Wallet stay in sync. <a href="#integrations">See integrations <ArrowRight size={15} /></a></div>
          </div>
        </section>

        <section id="roles" className="section roles-section">
          <div className="container">
            <SectionHeading
              eyebrow="Act II · The shift"
              title={<>Built for every role<br /><span>on the floor.</span></>}
              description="From the door to the DJ booth to the back office, Fennec routes the right tools to whoever is holding the iPad."
            />

            <div className="role-tabs" role="tablist" aria-label="Fennec roles">
              {roles.map((role) => (
                <button
                  key={role.name}
                  type="button"
                  role="tab"
                  aria-selected={activeRole.name === role.name}
                  className={`role-tab ${activeRole.name === role.name ? 'role-tab-active' : ''}`}
                  onClick={() => setActiveRole(role)}
                >
                  <span className="role-short">{role.short}</span>
                  <span>{role.name}</span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div className="role-panel" key={activeRole.name} role="tabpanel" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.22 }}>
                <div className="role-copy">
                  <div className="role-label"><activeRole.icon size={16} /> {activeRole.name}</div>
                  <h3>{activeRole.description}</h3>
                  <p>{activeRole.details}</p>
                  <div className="role-feature-list">
                    {activeRole.features.map((feature) => <div key={feature}><Check size={15} /> <span>{feature}</span></div>)}
                  </div>
                  <div className="role-module-tags">
                    {activeRole.modules.map((module) => <span key={module}>{module}</span>)}
                  </div>
                </div>
                <div className="role-screen-wrap">
                  <div className="window-bar"><div className="window-dots"><i /><i /><i /></div><span>{activeRole.name.toLowerCase()} / live view</span><span className="window-live"><span className="live-dot" /> live</span></div>
                  <img src={activeRole.image} alt={activeRole.imageAlt} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <section id="ferry" className="section ferry-section">
          <div className="ferry-glow ferry-glow-top" />
          <div className="ferry-glow ferry-glow-bottom" />
          <div className="container">
            <div className="ferry-intro">
              <div className="ferry-portrait"><img src={image('ferry-fox.png')} alt="Ferry, the Fennec AI fox" /></div>
              <div>
                <span className="eyebrow eyebrow-blue">00 · Copilot</span>
                <h2>Ferry the AI Fennec Fox</h2>
                <p className="ferry-tagline">A coordinated AI fox network that runs the night with you.</p>
                <p>Ferry is the command intelligence layer for Fennec — a blue lead agent coordinating specialist venue agents across floor ops, guests, campaigns, inventory and service in one live system.</p>
                <div className="ferry-actions"><a className="button button-light" href="#ferry">Meet Ferry <ArrowRight size={16} /></a><a className="button button-outline-light" href="#waitlist"><Play size={15} /> Get early access</a></div>
              </div>
            </div>

            <div className="ferry-network-heading"><span className="eyebrow eyebrow-blue">The squad</span><h3>Five agents, one shift.</h3><span className="ferry-live"><span className="live-dot" /> All systems live</span></div>
            <div className="ferry-agent-grid">
              {ferryAgents.map((agent) => (
                <div className="ferry-agent-card" key={agent.name}>
                  <div className="agent-image"><img src={agent.image} alt="" /></div>
                  <h4>{agent.name}</h4>
                  <span>{agent.role}</span>
                  <p>{agent.description}</p>
                  <div className="agent-route"><Zap size={13} /> Routes work to the right specialist agent.</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="guests" className="section guests-section">
          <div className="container">
            <div className="guest-layout">
              <div>
                <SectionHeading
                  eyebrow="For guests"
                  title={<>How your guests<br /><span>experience Fennec.</span></>}
                  description="The operator sees the whole room. The guest gets a faster, more personal night."
                />
                <div className="guest-module-list">
                  {guestModules.map((module) => {
                    const Icon = module.icon
                    return <a href={module.href} className="guest-module" key={module.title}><span className="guest-module-icon"><Icon size={18} /></span><span><strong>{module.title}</strong><small>{module.description}</small></span><ExternalArrow /></a>
                  })}
                </div>
              </div>
              <Screenshot image={image('hero-loyalty.jpg')} alt="Fennec Pass and loyalty dashboard screenshot" label="The Fennec Pass" title="One pass, every door." description="Tickets, table bookings, loyalty tiers and perks across every Fennec venue, in Apple and Google Wallet." href="#guests" />
            </div>
          </div>
        </section>

        <section id="waitlist" className="waitlist-section">
          <div className="waitlist-rings" />
          <div className="container waitlist-layout">
            <div className="waitlist-copy">
              <span className="eyebrow eyebrow-blue">Act III · The payoff</span>
              <h2>Stop guessing.<br /><span>Start deciding.</span></h2>
              <p>Every shift becomes data you can act on the next night — pricing, staffing, hosting and marketing. Decisions, not hunches.</p>
              <div className="waitlist-note"><span className="live-dot" /> Early access is rolling out to a hand-picked group of venues.</div>
            </div>
            <div className="waitlist-card">
              {submitted ? (
                <div className="form-success"><div className="success-mark"><Check size={22} /></div><span className="eyebrow eyebrow-small">Request received</span><h3>We’ll be in touch.</h3><p>Thanks for putting your venue on the list. The Fennec team will follow up with next steps.</p><button type="button" className="button button-outline" onClick={() => setSubmitted(false)}>Add another venue</button></div>
              ) : (
                <form onSubmit={handleWaitlistSubmit}>
                  <span className="eyebrow eyebrow-small">Early access</span>
                  <h3>Join the waitlist.</h3>
                  <p>Tell us a little about your venue and we’ll be in touch.</p>
                  <div className="form-grid">
                    <label>Venue name*<input required name="venue" placeholder="e.g. The Penthouse" /></label>
                    <label>Your name*<input required name="name" placeholder="First & last" /></label>
                    <label>Work email*<input required type="email" name="email" placeholder="you@venue.com" /></label>
                    <label>Phone<input name="phone" type="tel" placeholder="Optional" /></label>
                    <label>City<input name="city" placeholder="Where do you operate?" /></label>
                    <label className="form-full">Tell us about your venue<textarea name="message" rows={3} placeholder="Venue type, locations, what you’re trying to solve..." /></label>
                  </div>
                  <button className="button button-primary form-submit" type="submit">Join the waitlist <ArrowRight size={16} /></button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
