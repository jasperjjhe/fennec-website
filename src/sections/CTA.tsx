import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'

export function CTA() {
  return (
    <section id="demo" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[150px]" />

      <div className="max-w-3xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Stop managing chaos.{' '}
            <span className="text-gradient-accent">Start running shows.</span>
          </h2>
          <p className="text-lg text-text-secondary mb-10 max-w-xl mx-auto">
            See how 150+ venues use Fennec to cut setup time, track revenue in real-time,
            and keep their team in sync. 30-minute demo, no pitch deck.
          </p>

          <motion.a
            href="https://cal.com/vishaldesh/product-demo"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-accent text-background font-semibold text-lg hover:bg-accent-light transition-colors"
          >
            <Calendar size={20} />
            Book a Demo
            <ArrowRight size={20} />
          </motion.a>

          <p className="text-sm text-text-muted mt-6">
            Free for single venues. Enterprise plans available.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
