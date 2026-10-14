import type { FormEvent } from 'react'
import { Logo } from '../Logo/Logo'
import { CardIcon } from '../Icons/Icons'
import boxIcon from '../../assets/icons/box.png'
import cartIcon from '../../assets/icons/cart.png'
import crownIcon from '../../assets/icons/crown.png'
import heartIcon from '../../assets/icons/heart.png'
import searchIcon from '../../assets/icons/search.png'
import shieldIcon from '../../assets/icons/shield.png'
import truckIcon from '../../assets/icons/truck.png'
import userIcon from '../../assets/icons/user.png'
import styles from './Header.module.scss'

const benefits = [
  { icon: <img src={shieldIcon} alt="" width={16} height={17} />, text: 'Compra', highlight: '100% segura' },
  {
    icon: <img src={truckIcon} alt="" width={20} height={20} />,
    text: 'Frete grátis',
    highlight: 'acima de R$ 200',
    highlightFirst: true,
  },
  {
    icon: <CardIcon width={18} height={18} />,
    text: 'Parcele',
    highlight: 'suas compras',
    highlightFirst: true,
  },
]

const menu = [
  'Todas categorias',
  'Supermercado',
  'Livros',
  'Moda',
  'Lançamentos',
  'Ofertas do dia',
]

const actions = [
  { icon: boxIcon, label: 'Meus pedidos', size: 25 },
  { icon: heartIcon, label: 'Favoritos', size: 32 },
  { icon: userIcon, label: 'Minha conta', size: 32 },
  { icon: cartIcon, label: 'Carrinho', size: 32 },
]

export function Header() {
  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <ul className={styles.benefits}>
          {benefits.map(({ icon, text, highlight, highlightFirst }) => (
            <li key={text} className={styles.benefit}>
              {icon}
              {highlightFirst ? (
                <span>
                  <strong>{text}</strong> {highlight}
                </span>
              ) : (
                <span>
                  {text} <strong>{highlight}</strong>
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.main}>
        <a href="/" className={styles.logoLink}>
          <Logo />
        </a>

        <form className={styles.search} role="search" onSubmit={handleSearch}>
          <label htmlFor="search" className="visually-hidden">
            Buscar produtos
          </label>
          <input
            id="search"
            type="search"
            placeholder="O que você está buscando?"
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchButton} aria-label="Buscar">
            <img src={searchIcon} alt="" width={28} height={28} />
          </button>
        </form>

        <ul className={styles.actions}>
          {actions.map(({ icon, label, size }) => (
            <li key={label}>
              <a href="#" className={styles.action} aria-label={label} title={label}>
                <img src={icon} alt="" width={size} height={size} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <nav className={styles.nav} aria-label="Categorias principais">
        <ul className={styles.menu}>
          {menu.map((item) => (
            <li key={item}>
              <a
                href="#"
                className={`${styles.menuLink} ${item === 'Ofertas do dia' ? styles.menuHighlight : ''}`}
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a href="#" className={styles.menuLink}>
              <img src={crownIcon} alt="" width={19} height={15} />
              Assinatura
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
