import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedShinyTextProps {
  children: ReactNode
  className?: string
}

export function AnimatedShinyText({ children, className = '' }: AnimatedShinyTextProps) {
  return (
    <motion.span
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface/80 text-sm ${className}`}
      initial={{ backgroundPosition: '200% center' }}
      animate={{ backgroundPosition: '-200% center' }}
      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      style={{
        backgroundImage: 'linear-gradient(110deg, transparent 25%, rgba(245, 158, 11, 0.4) 50%, transparent 75%)',
        backgroundSize: '200% 100%',
      }}
    >
      {children}
    </motion.span>
  )
}
