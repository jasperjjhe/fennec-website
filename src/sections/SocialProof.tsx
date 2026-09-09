import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "Fennec replaced 6 apps we were juggling. Our hosts actually like working the door now.",
    author: "Marcus Chen",
    role: "GM, Skybar LA",
  },
  {
    quote: "The promoter portal paid for itself in week one. Finally know who's actually bringing covers.",
    author: "Jessica Reyes",
    role: "Owner, Club Nocturne",
  },
  {
    quote: "Ferry caught a 15% inventory variance we'd been missing for months. Real money back in our pocket.",
    author: "David Kim",
    role: "Ops Director, Nightfall Group",
  },
]

const stats = [
  { value: '2.4M+', label: 'Guests checked in' },
  { value: '$180M', label: 'Revenue tracked' },
  { value: '150+', label: 'Venues live' },
  { value: '99.9%', label: 'Uptime' },
]

export function SocialProof() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient-accent mb-2">{stat.value}</div>
              <div className="text-text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Venues that{' '}
            <span className="text-gradient-accent">run the night</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-surface border border-border"
            >
              <Quote size={24} className="text-accent/30 mb-4" />
              <p className="text-text-secondary mb-6">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-background font-bold">
                  {t.author[0]}
                </div>
                <div>
                  <div className="font-medium">{t.author}</div>
                  <div className="text-sm text-text-muted">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cities */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-border"
        >
          <p className="text-center text-text-muted text-sm mb-8">Running nightlife in 40+ cities</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-40">
            {['Las Vegas', 'Miami', 'New York', 'Los Angeles', 'Chicago', 'Toronto'].map((city) => (
              <span key={city} className="text-lg font-medium">{city}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
