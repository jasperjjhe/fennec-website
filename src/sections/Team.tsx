import { motion } from 'framer-motion'

const leadership = [
  { name: 'Vishal Desh', role: 'CEO', desc: 'Sets the vision and runs the room. A decade in hospitality.' },
  { name: 'Shiven Lohia', role: 'COO', desc: 'Runs the engine room. Turns ambitious roadmaps into on-time launches.' },
  { name: 'Brandon Atay', role: 'CBDO', desc: 'Opens doors and closes rooms. Builds partnerships.' },
]

const founders = [
  { name: 'Jean Rojas', role: 'VP Engineering' },
  { name: 'Jasper He', role: 'Founding Engineer' },
  { name: 'Sakthi Packiaraj', role: 'Marketing Director' },
  { name: 'Jacqueline Zhong', role: 'Marketing' },
  { name: 'Caitlin Low', role: 'Product Analyst' },
  { name: 'Miguel Nieto', role: 'Product Analyst' },
]

const advisors = [
  { name: 'Gautam Lohia', role: 'Founder of Apply Digital' },
  { name: 'Roohshan Divecha', role: 'Executive at Cvent' },
  { name: 'Sean Hodgins', role: 'Red Thread Ventures' },
  { name: 'Brendan Smith', role: 'Get Fresh Ventures' },
]

export function Team() {
  return (
    <section id="team" className="py-32 relative bg-surface/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            We live the <span className="text-gradient-accent">night</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Built by people who've worked the door, run the floor, and closed the books at 4am.
          </p>
        </motion.div>

        {/* Leadership */}
        <div className="mb-16">
          <h3 className="text-sm uppercase tracking-wide text-text-muted mb-6 text-center">Leadership</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {leadership.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-surface border border-border text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-background">
                  {person.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="font-semibold text-lg">{person.name}</div>
                <div className="text-accent text-sm mb-2">{person.role}</div>
                <p className="text-sm text-text-muted">{person.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Founding Team */}
        <div className="mb-16">
          <h3 className="text-sm uppercase tracking-wide text-text-muted mb-6 text-center">Founding Team</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {founders.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-4 rounded-xl bg-surface border border-border text-center"
              >
                <div className="w-10 h-10 rounded-full bg-surface-elevated flex items-center justify-center mx-auto mb-2 text-sm font-medium">
                  {person.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="font-medium text-sm">{person.name}</div>
                <div className="text-xs text-text-muted">{person.role}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Advisors */}
        <div>
          <h3 className="text-sm uppercase tracking-wide text-text-muted mb-6 text-center">Advisors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {advisors.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-4 rounded-xl bg-surface border border-border text-center"
              >
                <div className="font-medium text-sm">{person.name}</div>
                <div className="text-xs text-text-muted">{person.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
