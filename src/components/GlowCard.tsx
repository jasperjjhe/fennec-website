import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import clsx from 'clsx'

interface GlowCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function GlowCard({ children, className, delay = 0 }: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className={clsx(
        'relative p-6 rounded-2xl bg-surface border border-border',
        'hover:border-border/50 hover:shadow-[0_0_40px_rgba(245,158,11,0.08)]',
        'transition-all duration-300',
        className
      )}
    >
      {children}
    </motion.div>
  )
}
