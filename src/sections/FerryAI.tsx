import { motion } from 'framer-motion'
import { Bot, Sparkles, Brain, MessageSquare, TrendingUp, Clock, Users } from 'lucide-react'

const agents = [
  { name: 'Seating Agent', desc: 'Picks the best table based on party size, spend history, and preferences', icon: Users },
  { name: 'Inventory Agent', desc: 'Watches stock levels. Flags reorders before you run out', icon: TrendingUp },
  { name: 'Marketing Agent', desc: 'Writes personalized campaigns for your guest segments', icon: MessageSquare },
  { name: 'Ops Agent', desc: 'Spots bottlenecks. Suggests where to move staff', icon: Clock },
]

export function FerryAI() {
  return (
    <section id="ferry" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Bot size={16} className="text-accent" />
              <span className="text-sm text-accent">Ferry AI</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your AI ops team.{' '}
              <span className="text-gradient-accent">Always on.</span>
            </h2>

            <p className="text-lg text-text-secondary mb-8">
              Ferry runs multiple AI agents that watch your venue, catch problems,
              and suggest fixes before you ask. Like having extra managers who never sleep.
            </p>

            <div className="space-y-4">
              {agents.map((agent, i) => (
                <motion.div
                  key={agent.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-surface border border-border hover:border-accent/30 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-accent/10">
                    <agent.icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{agent.name}</h4>
                    <p className="text-sm text-text-muted">{agent.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl bg-surface border border-border p-8">
              {/* Central node */}
              <div className="flex justify-center mb-8">
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(245, 158, 11, 0.2)',
                      '0 0 40px rgba(245, 158, 11, 0.4)',
                      '0 0 20px rgba(245, 158, 11, 0.2)',
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center"
                >
                  <Brain size={32} className="text-background" />
                </motion.div>
              </div>

              <div className="text-center mb-8">
                <h4 className="font-semibold text-lg">Ferry Coordinator</h4>
                <p className="text-sm text-text-muted">4 agents running</p>
              </div>

              {/* Agent nodes */}
              <div className="grid grid-cols-2 gap-4">
                {agents.map((agent, i) => (
                  <motion.div
                    key={agent.name}
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="p-4 rounded-xl bg-surface-elevated border border-border"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs text-text-muted">Active</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <agent.icon size={14} className="text-accent" />
                      <span className="text-sm font-medium">{agent.name.replace(' Agent', '')}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Sample suggestion */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-6 p-4 rounded-xl bg-accent/10 border border-accent/20"
              >
                <div className="flex items-start gap-3">
                  <Sparkles size={16} className="text-accent mt-0.5" />
                  <div>
                    <p className="text-sm">
                      <span className="text-accent font-medium">Suggestion:</span>{' '}
                      Move 2 servers from Lounge to Main Floor. Estimated +15% tips.
                    </p>
                    <div className="flex gap-2 mt-3">
                      <button className="px-3 py-1 rounded-lg bg-accent text-background text-xs font-medium">
                        Apply
                      </button>
                      <button className="px-3 py-1 rounded-lg bg-surface border border-border text-xs">
                        Dismiss
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
