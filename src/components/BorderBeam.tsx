import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface BorderBeamProps {
  children: ReactNode
  className?: string
  duration?: number
}

export function BorderBeam({ children, className = '', duration = 8 }: BorderBeamProps) {
  return (
    <div className={`relative rounded-2xl overflow-hidden ${className}`}>
      {/* Animated border beam */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: 'conic-gradient(from 0deg, transparent, #f59e0b, transparent 30%)',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
      />

      {/* Inner content with background */}
      <div className="absolute inset-[1px] rounded-2xl bg-surface" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
