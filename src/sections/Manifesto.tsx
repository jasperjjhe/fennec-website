import { motion } from 'framer-motion'
import { Moon, Zap, Sparkles } from 'lucide-react'

const values = [
  {
    icon: Moon,
    title: 'We live the night',
    desc: "We've worked the door at 2am. We know what breaks when the venue's packed and the system goes down. We build for that moment."
  },
  {
    icon: Zap,
    title: 'We build at venue speed',
    desc: "Nightlife doesn't wait. Neither do we. If it's slowing you down, we ship a fix before last call."
  },
  {
    icon: Sparkles,
    title: 'Beautiful is non-negotiable',
    desc: "Your guests expect a premium experience. Your software should match. Every pixel matters."
  },
]

export function Manifesto() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.03] to-transparent" />

      <div className="max-w-5xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            We live nightlife. <span className="text-gradient-accent">We know tech.</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Your floor. Your rules. Software that gets out of the way and lets you run the show.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <value.icon size={24} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-text-muted">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
