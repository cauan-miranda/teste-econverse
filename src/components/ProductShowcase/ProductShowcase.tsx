import { useRef, useState } from 'react'
import type { Product } from '../../types/product'
import { ChevronLeftIcon, ChevronRightIcon } from '../Icons/Icons'
import { ProductCard } from '../ProductCard/ProductCard'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import styles from './ProductShowcase.module.scss'

const TABS = ['Celular', 'Acessórios', 'Tablets', 'Notebooks', 'TVs', 'Ver todos']

interface ProductShowcaseProps {
  id: string
  title: string
  products: Product[]
  loading: boolean
  error: string | null
  onSelectProduct: (product: Product) => void
  /** Vitrine principal exibe as abas de categoria; as demais o link "Ver todos" */
  showTabs?: boolean
}

export function ProductShowcase({
  id,
  title,
  products,
  loading,
  error,
  onSelectProduct,
  showTabs = false,
}: ProductShowcaseProps) {
  const [activeTab, setActiveTab] = useState(TABS[0])
  const trackRef = useRef<HTMLUListElement>(null)
  const titleId = `${id}-title`

  const scroll = (direction: 1 | -1) => {
    const track = trackRef.current
    const firstCard = track?.firstElementChild as HTMLElement | null
    if (!track || !firstCard) return
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    track.scrollBy({ left: direction * (firstCard.offsetWidth + gap), behavior: 'smooth' })
  }

  const renderContent = () => {
    if (loading) {
      return (
        <p className={styles.status} role="status">
          Carregando produtos...
        </p>
      )
    }
    if (error) {
      return (
        <p className={styles.status} role="alert">
          Não foi possível carregar os produtos. Tente novamente mais tarde.
        </p>
      )
    }
    return (
      <div className={styles.carousel}>
        <button
          type="button"
          className={`${styles.arrow} ${styles.prev}`}
          onClick={() => scroll(-1)}
          aria-label="Produtos anteriores"
          aria-controls={`${id}-track`}
        >
          <ChevronLeftIcon />
        </button>

        <ul id={`${id}-track`} ref={trackRef} className={styles.track}>
          {products.map((product, index) => (
            <li key={`${product.productName}-${index}`} className={styles.slide}>
              <ProductCard product={product} onSelect={onSelectProduct} />
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={`${styles.arrow} ${styles.next}`}
          onClick={() => scroll(1)}
          aria-label="Próximos produtos"
          aria-controls={`${id}-track`}
        >
          <ChevronRightIcon />
        </button>
      </div>
    )
  }

  return (
    <section id={id} className={styles.showcase} aria-labelledby={titleId}>
      <SectionTitle id={titleId} linkLabel={showTabs ? undefined : 'Ver todos'}>
        {title}
      </SectionTitle>

      {showTabs && (
        <ul className={styles.tabs} aria-label="Filtrar por categoria">
          {TABS.map((tab) => (
            <li key={tab}>
              <button
                type="button"
                className={`${styles.tab} ${tab === activeTab ? styles.tabActive : ''}`}
                aria-pressed={tab === activeTab}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      )}

      {renderContent()}
    </section>
  )
}
