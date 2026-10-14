import { Logo } from '../Logo/Logo'
import styles from './Brands.module.scss'

const brands = ['Econverse 1', 'Econverse 2', 'Econverse 3', 'Econverse 4', 'Econverse 5']

export function Brands() {
  return (
    <section className={styles.brands} aria-labelledby="brands-title">
      <h2 id="brands-title" className={styles.title}>
        Navegue por marcas
      </h2>
      <ul className={styles.list}>
        {brands.map((brand) => (
          <li key={brand}>
            <a href="#" className={styles.brand} aria-label={brand}>
              <Logo />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
