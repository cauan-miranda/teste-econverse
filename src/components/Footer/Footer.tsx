import { Logo } from '../Logo/Logo'
import facebookIcon from '../../assets/facebook.png'
import instagramIcon from '../../assets/instagram.png'
import linkedinIcon from '../../assets/linkedin.png'
import styles from './Footer.module.scss'

const columns = [
  {
    title: 'Institucional',
    links: ['Sobre nós', 'Movimento', 'Trabalhe conosco'],
  },
  {
    title: 'Ajuda',
    links: ['Suporte', 'Fale conosco', 'Perguntas frequentes'],
  },
  {
    title: 'Termos',
    links: ['Termos e condições', 'Política de privacidade', 'Troca e devolução'],
  },
]

const CURRENT_YEAR = new Date().getFullYear()

const socials = [
  { label: 'Instagram', icon: instagramIcon },
  { label: 'Facebook', icon: facebookIcon },
  { label: 'LinkedIn', icon: linkedinIcon },
]

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Logo />
          <p className={styles.about}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <ul className={styles.socials}>
            {socials.map(({ label, icon }) => (
              <li key={label}>
                <a href="#" aria-label={label} className={styles.social}>
                  <img src={icon} alt="" width={22} height={22} loading="lazy" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {columns.map((column) => (
          <nav key={column.title} className={styles.column} aria-label={column.title}>
            <h3 className={styles.columnTitle}>{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#" className={styles.link}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className={styles.copyright}>
        <p>Copyright © {CURRENT_YEAR} Econverse. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
