import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { DollarSign, Users, Clock, TrendingUp, Zap, Wine, Calendar } from 'lucide-react'

const stats = [
  { label: 'Booked Value', value: '$48,210', icon: DollarSign, color: 'text-green-400' },
  { label: 'Guest Count', value: '847', icon: Users, color: 'text-blue-400' },
  { label: 'Avg Wait', value: '4m', icon: Clock, color: 'text-purple-400' },
  { label: 'Conversion', value: '78%', icon: TrendingUp, color: 'text-accent' },
]

const activities = [
  { type: 'booking', text: 'VIP Table 12 booked', subtext: 'Michael S. • $2,400 minimum', time: '2s ago' },
  { type: 'checkin', text: 'Guest checked in', subtext: 'Sarah J. • VIP Loyalty', time: '15s ago' },
  { type: 'bottle', text: 'Bottle service delivered', subtext: 'Table 8 • Dom Perignon', time: '32s ago' },
  { type: 'ai', text: 'Ferry AI suggestion', subtext: 'Move overflow to Terrace', time: '1m ago' },
  { type: 'promo', text: 'Commission earned', subtext: 'DJ Mike • $340', time: '2m ago' },
]

export function LiveConsole() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [bookedValue, setBookedValue] = useState(48210)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % activities.length)
      setBookedValue((v) => v + Math.floor(Math.random() * 500) + 100)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-transparent to-accent/10 rounded-3xl blur-2xl opacity-50" />

      <div className="relative rounded-2xl bg-surface border border-border overflow-hidden">
        {/* Console header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-elevated">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-xs text-text-muted">Fennec Console • Live</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-green-400">Connected</span>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-px bg-border">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-4 bg-surface"
            >
              <div className="flex items-center gap-2 mb-1">
                <stat.icon size={14} className={stat.color} />
                <span className="text-xs text-text-muted">{stat.label}</span>
              </div>
              <div className="text-xl font-semibold">
                {stat.label === 'Booked Value' ? (
                  <motion.span
                    key={bookedValue}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ${bookedValue.toLocaleString()}
                  </motion.span>
                ) : (
                  stat.value
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Activity feed */}
        <div className="border-t border-border">
          <div className="px-4 py-2 border-b border-border">
            <span className="text-xs text-text-muted uppercase tracking-wide">Live Activity</span>
          </div>
          <div className="divide-y divide-border">
            <AnimatePresence mode="popLayout">
              {activities.slice(0, 4).map((activity, i) => (
                <motion.div
                  key={activity.text + i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: i === activeIndex ? 1 : 0.6,
                    x: 0,
                    backgroundColor: i === activeIndex ? 'rgba(245, 158, 11, 0.05)' : 'transparent'
                  }}
                  exit={{ opacity: 0, x: 20 }}
                  className="px-4 py-3 flex items-start gap-3"
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    activity.type === 'ai' ? 'bg-accent/20' : 'bg-surface-elevated'
                  }`}>
                    {activity.type === 'booking' && <Calendar size={14} className="text-green-400" />}
                    {activity.type === 'checkin' && <Users size={14} className="text-blue-400" />}
                    {activity.type === 'bottle' && <Wine size={14} className="text-purple-400" />}
                    {activity.type === 'ai' && <Zap size={14} className="text-accent" />}
                    {activity.type === 'promo' && <TrendingUp size={14} className="text-pink-400" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{activity.text}</div>
                    <div className="text-xs text-text-muted truncate">{activity.subtext}</div>
                  </div>
                  <div className="text-xs text-text-muted whitespace-nowrap">{activity.time}</div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
