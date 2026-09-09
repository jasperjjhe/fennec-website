import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import clsx from 'clsx'

interface AnimatedBorderProps {
  children: ReactNode
  className?: string
}

export function AnimatedBorder({ children, className }: AnimatedBorderProps) {
  return (
    <div className={clsx('relative group', className)}>
      <motion.div
        className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, #f59e0b 0%, transparent 50%, #d97706 100%)',
        }}
        animate={{
          background: [
            'linear-gradient(0deg, #f59e0b 0%, transparent 50%, #d97706 100%)',
            'linear-gradient(90deg, #f59e0b 0%, transparent 50%, #d97706 100%)',
            'linear-gradient(180deg, #f59e0b 0%, transparent 50%, #d97706 100%)',
            'linear-gradient(270deg, #f59e0b 0%, transparent 50%, #d97706 100%)',
            'linear-gradient(360deg, #f59e0b 0%, transparent 50%, #d97706 100%)',
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <div className="relative bg-surface rounded-2xl border border-border">
        {children}
      </div>
    </div>
  )
}
