import type { ReactNode } from 'react'
import styles from './SectionTitle.module.scss'

interface SectionTitleProps {
  id: string
  children: ReactNode
  linkLabel?: string
  linkHref?: string
}

export function SectionTitle({ id, children, linkLabel, linkHref = '#' }: SectionTitleProps) {
  return (
    <div className={styles.wrapper}>
      <h2 id={id} className={styles.title}>
        {children}
      </h2>
      {linkLabel && (
        <a href={linkHref} className={styles.link}>
          {linkLabel}
        </a>
      )}
    </div>
  )
}
