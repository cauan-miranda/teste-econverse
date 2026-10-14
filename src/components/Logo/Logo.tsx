import styles from './Logo.module.scss'

interface LogoProps {
  className?: string
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <span className={`${styles.logo} ${className}`} aria-label="Econverse">
      <span className={styles.mark} aria-hidden="true">
        ec
      </span>
      <span aria-hidden="true">onverse</span>
    </span>
  )
}
