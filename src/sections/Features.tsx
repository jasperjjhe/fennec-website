import { motion } from 'framer-motion'
import { GlowCard } from '../components/GlowCard'
import {
  Layout, Wine, Users, TicketPercent, Share2, Heart, MessageSquare,
  UserCog, Package, Bot, CreditCard, Wallet, BarChart3, Calendar,
  MapPin, Bell, Shield, Zap, Target, Globe, Clock, Star, FileText,
  DollarSign, Percent, Building2, Smartphone, Lock
} from 'lucide-react'

const features = [
  { icon: Layout, name: 'Floor Plan Editor', desc: 'Drag tables around. See who sat where, and when.', category: 'ops' },
  { icon: MapPin, name: 'Live Event Ops', desc: "Bird's eye view of your floor. Every table, guest, and server.", category: 'ops' },
  { icon: Wine, name: 'Bottle Service', desc: 'Minimums, packages, and inventory per table.', category: 'ops' },
  { icon: TicketPercent, name: 'Guestlist & Ticketing', desc: 'Pull from Eventbrite, Showpass, POSH, Tixr.', category: 'ops' },
  { icon: Share2, name: 'Promoter Portal', desc: 'Custom links, commission tracking, live leaderboards.', category: 'ops' },
  { icon: Heart, name: 'Guest CRM', desc: 'Lifetime value, preferences, every visit.', category: 'crm' },
  { icon: MessageSquare, name: 'SMS/WhatsApp/Email', desc: 'Send campaigns. Track opens. See conversions.', category: 'marketing' },
  { icon: UserCog, name: 'Staff Management', desc: 'Scheduling, roles, permissions, tip-out math.', category: 'team' },
  { icon: Package, name: 'Inventory Dashboard', desc: 'Par levels, variance tracking, catch theft early.', category: 'ops' },
  { icon: Bot, name: 'Ferry AI', desc: 'Multiple agents working together to run your venue.', category: 'ai' },
  { icon: CreditCard, name: 'POS Integration', desc: 'Square, Toast, Lightspeed data flows in.', category: 'integrations' },
  { icon: Wallet, name: 'Loyalty Passes', desc: 'Apple Wallet & Google Pay. Tiered rewards.', category: 'crm' },
  { icon: BarChart3, name: 'Analytics', desc: 'Custom dashboards. Export to PDF or CSV.', category: 'analytics' },
  { icon: Calendar, name: 'Event Calendar', desc: 'Multi-venue scheduling. Conflict detection.', category: 'ops' },
  { icon: Bell, name: 'Smart Alerts', desc: 'Role-based notifications via SMS, push, Slack.', category: 'team' },
  { icon: Shield, name: 'ID Scanning', desc: 'Age verification. Banned guest alerts.', category: 'ops' },
  { icon: Zap, name: 'Auto-Assign Tables', desc: 'AI picks the best seat based on party size and spend.', category: 'ai' },
  { icon: Target, name: 'Marketing Segments', desc: 'Build audiences from behavior and spend.', category: 'marketing' },
  { icon: Globe, name: 'Multi-Venue', desc: 'Centralized ops. Rollup analytics across locations.', category: 'enterprise' },
  { icon: Clock, name: 'Wait Time Tracker', desc: 'Real-time queue. SMS updates to guests.', category: 'ops' },
  { icon: Star, name: 'VIP Experiences', desc: 'Custom packages. Reserved parking. Velvet rope.', category: 'crm' },
  { icon: FileText, name: 'Digital Contracts', desc: 'E-sign minimums. Collect deposits inline.', category: 'ops' },
  { icon: DollarSign, name: 'Revenue Forecasting', desc: 'ML predictions based on your historical data.', category: 'analytics' },
  { icon: Percent, name: 'Dynamic Pricing', desc: 'Demand-based cover charges and minimums.', category: 'ai' },
  { icon: Building2, name: 'Vendor Management', desc: 'Track suppliers, orders, payment terms.', category: 'ops' },
  { icon: Smartphone, name: 'Mobile Apps', desc: 'Native iOS/Android for staff and guests.', category: 'platform' },
  { icon: Lock, name: 'Security Logs', desc: 'Full audit trail. Compliance ready.', category: 'enterprise' },
  { icon: Users, name: 'Team Chat', desc: 'In-app messaging. Shift handoff notes.', category: 'team' },
]


export function Features() {
  return (
    <section id="features" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            28 modules.{' '}
            <span className="text-gradient-accent">One brain.</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Everything your venue needs to run the night. No more juggling
            spreadsheets, texts, and paper.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <GlowCard key={feature.name} delay={i * 0.02} className="group">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <feature.icon size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">{feature.name}</h3>
                  <p className="text-sm text-text-muted">{feature.desc}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}
