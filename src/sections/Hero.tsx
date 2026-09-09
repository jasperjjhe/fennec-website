import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { LiveConsole } from '../components/LiveConsole'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent/10 rounded-full blur-[120px] opacity-30" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#fafafa 1px, transparent 1px), linear-gradient(90deg, #fafafa 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border mb-8"
            >
              <Sparkles size={14} className="text-accent" />
              <span className="text-sm text-text-secondary">Introducing Ferry AI</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
              Your floor.{' '}
              <span className="text-gradient-accent">Your rules.</span>
            </h1>

            <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-lg">
              The venue operating system that ditches spreadsheets for real-time decisions.
              Floor plans, reservations, staff, inventory&mdash;one platform, zero chaos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://cal.com/vishaldesh/product-demo"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-background font-medium hover:bg-accent-light transition-colors"
              >
                Book a Demo
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#features"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-surface border border-border text-text-primary font-medium hover:bg-surface-elevated transition-colors"
              >
                See Features
              </motion.a>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div>
                <div className="text-2xl font-bold">$2.4M+</div>
                <div className="text-sm text-text-muted">Tracked nightly</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <div className="text-2xl font-bold">150+</div>
                <div className="text-sm text-text-muted">Venues live</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm text-text-muted">Uptime</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <LiveConsole />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
