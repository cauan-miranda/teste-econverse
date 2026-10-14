import { useState } from 'react'
import type { CSSProperties } from 'react'
import bebidasIcon from '../../assets/icons/categories/bebidas.png'
import esportesIcon from '../../assets/icons/categories/esportes.png'
import ferramentasIcon from '../../assets/icons/categories/ferramentas.png'
import modaIcon from '../../assets/icons/categories/moda.png'
import saudeIcon from '../../assets/icons/categories/saude.png'
import supermercadoIcon from '../../assets/icons/categories/supermercado.png'
import tecnologiaIcon from '../../assets/icons/categories/tecnologia.png'
import styles from './Categories.module.scss'

interface Category {
  name: string
  icon: string
  /** Ícone colorido: exibido como imagem, sem recolorir pela máscara */
  colored?: boolean
}

const categories: Category[] = [
  { name: 'Tecnologia', icon: tecnologiaIcon, colored: true },
  { name: 'Supermercado', icon: supermercadoIcon },
  { name: 'Bebidas', icon: bebidasIcon },
  { name: 'Ferramentas', icon: ferramentasIcon },
  { name: 'Saúde', icon: saudeIcon },
  { name: 'Esportes e Fitness', icon: esportesIcon },
  { name: 'Moda', icon: modaIcon },
]

export function Categories() {
  const [active, setActive] = useState(categories[0].name)

  return (
    <section className={styles.categories} aria-labelledby="categories-title">
      <h2 id="categories-title" className="visually-hidden">
        Compre por categoria
      </h2>
      <ul className={styles.list}>
        {categories.map(({ name, icon, colored }) => {
          const isActive = name === active
          return (
            <li key={name}>
              <button
                type="button"
                className={`${styles.item} ${isActive ? styles.active : ''}`}
                aria-pressed={isActive}
                onClick={() => setActive(name)}
              >
                <span className={styles.iconBox}>
                  {colored ? (
                    <img src={icon} alt="" className={styles.iconImage} />
                  ) : (
                    // O PNG é usado como máscara: a cor vem do CSS (escuro ou azul quando ativo)
                    <span
                      className={styles.icon}
                      style={{ '--icon': `url("${icon}")` } as CSSProperties}
                      aria-hidden="true"
                    />
                  )}
                </span>
                <span className={styles.label}>{name}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
