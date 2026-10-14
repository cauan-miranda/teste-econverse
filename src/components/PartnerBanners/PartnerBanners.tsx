import styles from './PartnerBanners.module.scss'

interface PartnerBannersProps {
  title?: string
}

export function PartnerBanners({ title = 'Parceiros' }: PartnerBannersProps) {
  return (
    <section className={styles.banners} aria-label={title}>
      {[1, 2].map((item) => (
        <article key={item} className={styles.banner}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur</p>
          <a href="#" className={styles.button}>
            Confira
          </a>
        </article>
      ))}
    </section>
  )
}
