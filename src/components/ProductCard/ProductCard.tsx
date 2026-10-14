import type { Product } from '../../types/product'
import { INSTALLMENTS, formatPrice, getInstallmentValue, getListPrice } from '../../utils/price'
import styles from './ProductCard.module.scss'

interface ProductCardProps {
  product: Product
  onSelect: (product: Product) => void
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  const { productName, descriptionShort, photo, price } = product

  return (
    <article className={styles.card}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => onSelect(product)}
        aria-label={`Ver detalhes de ${productName}`}
      >
        <img
          src={photo}
          alt={productName}
          className={styles.image}
          width={228}
          height={228}
          loading="lazy"
        />
      </button>

      <div className={styles.info}>
        <h3 className={styles.name}>{descriptionShort}</h3>

        <p className={styles.prices}>
          <s className={styles.listPrice}>
            <span className="visually-hidden">De </span>
            {formatPrice(getListPrice(price))}
          </s>
          <strong className={styles.price}>
            <span className="visually-hidden">Por </span>
            {formatPrice(price)}
          </strong>
        </p>

        <p className={styles.installments}>
          ou {INSTALLMENTS}x de {formatPrice(getInstallmentValue(price))} sem juros
        </p>
        <p className={styles.shipping}>Frete grátis</p>

        <button type="button" className={styles.buy} onClick={() => onSelect(product)}>
          Comprar
        </button>
      </div>
    </article>
  )
}
