import { motion } from 'framer-motion'

// SVG icons for integrations
const SquareIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <rect x="4" y="4" width="16" height="16" rx="2" />
  </svg>
)

const ToastIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M4 8h16v8a2 2 0 01-2 2H6a2 2 0 01-2-2V8zm2-2a2 2 0 012-2h8a2 2 0 012 2v2H6V6z" />
  </svg>
)

const LightspeedIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
)

const TicketIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 9a3 3 0 003 3v4a2 2 0 002 2h10a2 2 0 002-2v-4a3 3 0 100-6V8a2 2 0 00-2-2H7a2 2 0 00-2 2v1a3 3 0 00-3 3z" />
  </svg>
)

const MessageIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M20 2H4a2 2 0 00-2 2v18l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2z" />
  </svg>
)

const MailIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 6l-10 7L2 6" />
  </svg>
)

const StripeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z" />
  </svg>
)

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
)

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
)

const integrations = [
  { name: 'Square', icon: SquareIcon, color: 'bg-black text-white', desc: 'POS sync' },
  { name: 'Toast', icon: ToastIcon, color: 'bg-orange-600 text-white', desc: 'POS sync' },
  { name: 'Lightspeed', icon: LightspeedIcon, color: 'bg-red-600 text-white', desc: 'POS sync' },
  { name: 'Eventbrite', icon: TicketIcon, color: 'bg-orange-500 text-white', desc: 'Ticketing' },
  { name: 'Showpass', icon: TicketIcon, color: 'bg-purple-600 text-white', desc: 'Ticketing' },
  { name: 'POSH', icon: TicketIcon, color: 'bg-pink-500 text-white', desc: 'Ticketing' },
  { name: 'Tixr', icon: TicketIcon, color: 'bg-blue-600 text-white', desc: 'Ticketing' },
  { name: 'Twilio', icon: MessageIcon, color: 'bg-red-500 text-white', desc: 'SMS' },
  { name: 'SendGrid', icon: MailIcon, color: 'bg-blue-500 text-white', desc: 'Email' },
  { name: 'Stripe', icon: StripeIcon, color: 'bg-indigo-600 text-white', desc: 'Payments' },
  { name: 'Apple Wallet', icon: AppleIcon, color: 'bg-gray-800 text-white', desc: 'Passes' },
  { name: 'Google Pay', icon: GoogleIcon, color: 'bg-white text-gray-800 border border-gray-200', desc: 'Passes' },
]

export function Integrations() {
  return (
    <section id="integrations" className="py-32 relative bg-surface/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Works with your <span className="text-gradient-accent">stack</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Keep the tools you love. Fennec pulls data from your POS, ticketing, and comms
            platforms so everything's in one place.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {integrations.map((int, i) => (
            <motion.div
              key={int.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-xl bg-surface border border-border hover:border-border/50 transition-all text-center group"
            >
              <div className={`w-12 h-12 rounded-xl ${int.color} flex items-center justify-center mx-auto mb-3`}>
                <int.icon />
              </div>
              <div className="font-medium text-sm">{int.name}</div>
              <div className="text-xs text-text-muted">{int.desc}</div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-text-muted mt-8"
        >
          + Zapier, webhooks, and REST API for anything else
        </motion.p>
      </div>
    </section>
  )
}
