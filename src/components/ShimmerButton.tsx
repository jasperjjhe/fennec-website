import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ShimmerButtonProps {
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
}

export function ShimmerButton({ children, className = '', href, onClick }: ShimmerButtonProps) {
  const Component = href ? motion.a : motion.button

  return (
    <Component
      href={href}
      target={href ? '_blank' : undefined}
      rel={href ? 'noopener noreferrer' : undefined}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent text-background font-semibold overflow-hidden group ${className}`}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Component>
  )
}
