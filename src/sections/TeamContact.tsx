import { ArrowRight, CalendarDays, Instagram, Linkedin, Mail, Twitter } from 'lucide-react'

type Person = {
  name: string
  role: string
  title?: string
  bio: string
  image: string
}

const image = (fileName: string) => `./images/${fileName}`

const leadership: Person[] = [
  {
    name: 'Vishal Desh',
    role: 'CEO',
    title: 'Chief Executive Officer',
    bio: 'Sets the vision and runs the room. A decade in hospitality — now obsessed with shipping the operating system the industry has been waiting for.',
    image: image('team-ceo.png'),
  },
  {
    name: 'Shiven Lohia',
    role: 'COO',
    title: 'Chief Operations Officer',
    bio: 'Runs the engine room. Turns ambitious roadmaps into on-time launches and keeps every venue rollout running on rails.',
    image: image('team-coo.jpg'),
  },
  {
    name: 'Brandon Atay',
    role: 'CBDO',
    title: 'Chief Business Development Officer',
    bio: 'Opens doors and closes rooms. Builds the partnerships, deals, and venue relationships that turn Fennec into the default for premium nightlife.',
    image: image('team-cbdo.jpeg'),
  },
]

const foundingTeam: Person[] = [
  {
    name: 'Jean Rojas',
    role: 'VP Engineering',
    bio: 'Leads engineering. Architects the systems that keep every venue online when the room is at capacity.',
    image: image('team-jean.png'),
  },
  {
    name: 'Jasper He',
    role: 'Founding Engineer',
    bio: 'Ships fast, ships clean. Turns the hardest problems on the floor into shippable product.',
    image: image('team-jasper.jpeg'),
  },
  {
    name: 'Sakthi Packiaraj',
    role: 'Marketing Director',
    bio: 'Builder at heart. Ships the details that make Fennec feel inevitable on the floor.',
    image: image('team-sakthi.jpeg'),
  },
  {
    name: 'Jacqueline Zhong',
    role: 'Marketing',
    bio: "Shapes the story. Brings Fennec's voice to operators, promoters, and the rooms they run.",
    image: image('team-jacqueline.jpg'),
  },
  {
    name: 'Caitlin Low',
    role: 'Product Analyst',
    bio: 'Turns floor signal into product clarity. Pairs operator empathy with the data instincts to make every release sharper.',
    image: image('team-caitlin.jpeg'),
  },
  {
    name: 'Miguel Nieto',
    role: 'Product Analyst',
    bio: 'Lives in the details. Translates venue workflows into the metrics and specs that keep Fennec shipping the right things.',
    image: image('team-miguel.jpg'),
  },
]

const advisors: Person[] = [
  {
    name: 'Gautam Lohia',
    role: 'Advisor',
    title: 'Founder of Apply Digital · CEO of Uniserve',
    bio: 'Operator and investor with decades of building and scaling category-defining companies.',
    image: image('advisor-gautam.jpeg'),
  },
  {
    name: 'Roohshan Divecha',
    role: 'Advisor',
    title: 'Executive at Cvent (Global Event Tech Platform)',
    bio: 'Veteran technology leader who helps Fennec scale engineering with discipline and speed.',
    image: image('advisor-roohshan.jpeg'),
  },
  {
    name: 'Sean Hodgins',
    role: 'Advisor',
    title: 'Red Thread Ventures (Investor) and CFO',
    bio: 'Backs early and brings hospitality and operating depth to the cap table.',
    image: image('advisor-sean.jpeg'),
  },
  {
    name: 'Brendan Smith',
    role: 'Advisor',
    title: 'Advisor from Get Fresh Ventures (previous)',
    bio: 'Early believer who connects Fennec to the operators and venues shaping the industry.',
    image: image('advisor-brendan.png'),
  },
]

function PersonCard({ person, featured = false }: { person: Person; featured?: boolean }) {
  return (
    <article className={`team-person-card ${featured ? 'team-person-card-featured' : ''}`}>
      <div className="team-person-image">
        <img src={person.image} alt={`${person.name}, ${person.role}`} loading="lazy" />
      </div>
      <div className="team-person-copy">
        <span className="eyebrow eyebrow-small">{person.role}</span>
        <h3>{person.name}</h3>
        {person.title && <p className="team-person-title">{person.title}</p>}
        <p>{person.bio}</p>
      </div>
    </article>
  )
}

export function TeamContact() {
  return (
    <>
      <section id="team" className="section team-section">
        <div className="container">
          <div className="team-heading-row">
            <div>
              <span className="eyebrow">The people behind the platform</span>
              <h2>We live the <span>night.</span></h2>
            </div>
            <p>Built by people who have worked the door, run the floor, and closed the books at 4am.</p>
          </div>

          <div className="team-section-heading"><span className="eyebrow eyebrow-small">Leadership</span><span>Vision, operations, and the room.</span></div>
          <div className="team-leadership-grid">
            {leadership.map((person) => <PersonCard key={person.name} person={person} featured />)}
          </div>

          <div className="team-section-heading"><span className="eyebrow eyebrow-small">Founding team</span><span>The builders on shift.</span></div>
          <div className="team-grid">
            {foundingTeam.map((person) => <PersonCard key={person.name} person={person} />)}
          </div>

          <div className="team-section-heading"><span className="eyebrow eyebrow-small">Advisors</span><span>Operators and investors in our corner.</span></div>
          <div className="team-advisor-grid">
            {advisors.map((person) => <PersonCard key={person.name} person={person} />)}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container contact-layout">
          <div className="contact-copy">
            <span className="eyebrow eyebrow-blue">Contact</span>
            <h2>Bring the whole shift<br /><span>into one live picture.</span></h2>
            <p>Venue demos, partnerships, hiring, or a better way to run the night — reach the people building Fennec.</p>
            <div className="contact-facts">
              <a href="https://cal.com/vishaldesh/product-demo" target="_blank" rel="noopener noreferrer">
                <span><CalendarDays size={15} /> Venue demos</span>
                Book a time with the team <ArrowRight size={14} />
              </a>
              <a href="mailto:careers@fennec.io">
                <span><Mail size={15} /> Careers</span>
                careers@fennec.io <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <div className="contact-card">
            <span className="eyebrow eyebrow-small">Start a conversation</span>
            <h3>Tell us what the night needs.</h3>
            <p>Share your venue, your workflow, or the problem that keeps showing up after close.</p>
            <a className="button button-light" href="#waitlist">Join the early-access list <ArrowRight size={16} /></a>
            <div className="contact-socials" aria-label="Fennec social profiles">
              <span>Find us</span>
              <a href="https://linkedin.com/company/fennecapp" target="_blank" rel="noopener noreferrer" aria-label="Fennec on LinkedIn"><Linkedin size={16} /></a>
              <a href="https://instagram.com/fennecapp" target="_blank" rel="noopener noreferrer" aria-label="Fennec on Instagram"><Instagram size={16} /></a>
              <a href="https://twitter.com/fennecapp" target="_blank" rel="noopener noreferrer" aria-label="Fennec on X"><Twitter size={16} /></a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
