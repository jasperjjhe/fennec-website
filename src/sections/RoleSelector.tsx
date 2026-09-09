import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Crown, UserCircle, Wine, Megaphone, Shield,
  Check, BarChart3, DollarSign, Bell, Users
} from 'lucide-react'

const roles = [
  {
    id: 'owner',
    name: 'Owner / GM',
    icon: Crown,
    desc: 'See everything. Control everything.',
    features: [
      'Revenue dashboards & P&L',
      'Staff scheduling & payroll',
      'Multi-venue rollups',
      'Inventory & loss tracking',
      'Marketing automation',
      'AI insights & forecasting'
    ],
    color: 'text-yellow-400',
    modules: ['Analytics', 'Staff', 'Inventory', 'Marketing', 'AI', 'All Venues']
  },
  {
    id: 'host',
    name: 'Host / Maitre D',
    icon: UserCircle,
    desc: 'Own the door and the floor.',
    features: [
      'Live floor plan view',
      'Guestlist management',
      'Walk-in queue & waitlist',
      'Table assignment',
      'VIP alerts & preferences',
      'Real-time capacity'
    ],
    color: 'text-blue-400',
    modules: ['Floor Plan', 'Guestlist', 'CRM', 'Waitlist']
  },
  {
    id: 'server',
    name: 'Bottle Server',
    icon: Wine,
    desc: 'More service. Better tips.',
    features: [
      'Your assigned tables',
      'Order entry & POS sync',
      'Guest preferences & history',
      'Tip tracking & pooling',
      'Upsell suggestions',
      'Shift notes'
    ],
    color: 'text-purple-400',
    modules: ['Tables', 'Orders', 'Tips', 'Guests']
  },
  {
    id: 'promoter',
    name: 'Promoter',
    icon: Megaphone,
    desc: 'Grow your network. Grow your wallet.',
    features: [
      'Personal booking link',
      'Commission dashboard',
      'Guest check-in tracking',
      'Performance leaderboard',
      'Payout history',
      'Marketing materials'
    ],
    color: 'text-pink-400',
    modules: ['Bookings', 'Commissions', 'Guests', 'Analytics']
  },
  {
    id: 'security',
    name: 'Security',
    icon: Shield,
    desc: 'Keep the venue safe.',
    features: [
      'ID scanning & verification',
      'Banned guest alerts',
      'Capacity monitoring',
      'Incident logging',
      'VIP arrival alerts',
      'Emergency protocols'
    ],
    color: 'text-red-400',
    modules: ['ID Scan', 'Alerts', 'Capacity', 'Logs']
  },
]

export function RoleSelector() {
  const [activeRole, setActiveRole] = useState(roles[0])

  return (
    <section id="roles" className="py-32 relative bg-surface/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built for{' '}
            <span className="text-gradient-accent">every role</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Each person sees exactly what they need. No clutter. No confusion.
          </p>
        </motion.div>

        {/* Role tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {roles.map((role) => (
            <motion.button
              key={role.id}
              onClick={() => setActiveRole(role)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                activeRole.id === role.id
                  ? 'bg-accent text-background'
                  : 'bg-surface border border-border text-text-secondary hover:text-text-primary'
              }`}
            >
              <role.icon size={18} />
              <span className="text-sm font-medium">{role.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Role content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRole.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            {/* Features list */}
            <div className="order-2 lg:order-1">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border mb-4`}>
                <activeRole.icon size={16} className={activeRole.color} />
                <span className="text-sm font-medium">{activeRole.name}</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{activeRole.desc}</h3>
              <p className="text-text-secondary mb-6">
                Fennec shows only what matters for this role.
              </p>

              <div className="space-y-3">
                {activeRole.features.map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                      <Check size={12} className="text-accent" />
                    </div>
                    <span className="text-text-secondary">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-8">
                {activeRole.modules.map((mod) => (
                  <span key={mod} className="px-3 py-1 rounded-full bg-surface-elevated border border-border text-xs text-text-muted">
                    {mod}
                  </span>
                ))}
              </div>
            </div>

            {/* Mockup */}
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl bg-surface border border-border overflow-hidden glow-amber">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-elevated">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs text-text-muted ml-2">{activeRole.name} View</span>
                </div>

                <div className="p-6 space-y-4">
                  {/* Quick stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-surface-elevated">
                      <DollarSign size={16} className="text-accent mb-2" />
                      <div className="text-xl font-bold">$12.4k</div>
                      <div className="text-xs text-text-muted">Tonight</div>
                    </div>
                    <div className="p-4 rounded-xl bg-surface-elevated">
                      <Users size={16} className="text-blue-400 mb-2" />
                      <div className="text-xl font-bold">284</div>
                      <div className="text-xs text-text-muted">Guests</div>
                    </div>
                    <div className="p-4 rounded-xl bg-surface-elevated">
                      <BarChart3 size={16} className="text-green-400 mb-2" />
                      <div className="text-xl font-bold">89%</div>
                      <div className="text-xs text-text-muted">Capacity</div>
                    </div>
                  </div>

                  {/* Mini floor plan */}
                  <div className="grid grid-cols-4 gap-2">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-12 rounded-lg ${
                          [2, 5, 7, 10].includes(i)
                            ? 'bg-green-500/20 border border-green-500/30'
                            : [0, 3, 8].includes(i)
                            ? 'bg-accent/20 border border-accent/30'
                            : 'bg-surface-elevated'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Activity */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-elevated">
                      <Bell size={14} className="text-accent" />
                      <span className="text-sm">VIP arriving in 10 minutes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
