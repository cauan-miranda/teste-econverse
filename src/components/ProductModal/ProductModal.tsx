import { useEffect, useRef, useState } from 'react'
import type { MouseEvent } from 'react'
import type { Product } from '../../types/product'
import { formatPrice } from '../../utils/price'
import { CloseIcon, MinusIcon, PlusIcon } from '../Icons/Icons'
import styles from './ProductModal.module.scss'

interface ProductModalProps {
  product: Product | null
  onClose: () => void
}

const MIN_QUANTITY = 1
const MAX_QUANTITY = 99

export function ProductModal({ product, onClose }: ProductModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  // Abre/fecha o <dialog> nativo (foco preso e tecla Esc sem bibliotecas)
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (product) {
      if (!dialog.open) dialog.showModal()
      document.body.classList.add('no-scroll')
    } else if (dialog.open) {
      dialog.close()
    }

    return () => document.body.classList.remove('no-scroll')
  }, [product])

  // Fecha ao clicar no backdrop (o clique cai no próprio <dialog>)
  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) onClose()
  }

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby="product-modal-title"
      onClose={onClose}
      onClick={handleBackdropClick}
    >
      {/* key garante que a quantidade volte a 1 a cada produto aberto */}
      {product && <ProductDetails key={product.productName} product={product} onClose={onClose} />}
    </dialog>
  )
}

interface ProductDetailsProps {
  product: Product
  onClose: () => void
}

function ProductDetails({ product, onClose }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(MIN_QUANTITY)

  const decrease = () => setQuantity((q) => Math.max(MIN_QUANTITY, q - 1))
  const increase = () => setQuantity((q) => Math.min(MAX_QUANTITY, q + 1))

  return (
    <div className={styles.content}>
      <button type="button" className={styles.close} onClick={onClose} aria-label="Fechar">
        <CloseIcon />
      </button>

      <div className={styles.media}>
        <img src={product.photo} alt={product.productName} className={styles.image} />
      </div>

      <div className={styles.details}>
        <h2 id="product-modal-title" className={styles.name}>
          {product.productName}
        </h2>
        <p className={styles.price}>{formatPrice(product.price)}</p>
        <p className={styles.description}>{product.descriptionShort}</p>
        <a href="#" className={styles.moreLink}>
          Veja mais detalhes do produto &gt;
        </a>

        <div className={styles.actions}>
          <div className={styles.quantity} role="group" aria-label="Quantidade">
            <button
              type="button"
              onClick={decrease}
              disabled={quantity <= MIN_QUANTITY}
              aria-label="Diminuir quantidade"
            >
              <MinusIcon width={18} height={18} />
            </button>
            <output aria-live="polite">{String(quantity).padStart(2, '0')}</output>
            <button
              type="button"
              onClick={increase}
              disabled={quantity >= MAX_QUANTITY}
              aria-label="Aumentar quantidade"
            >
              <PlusIcon width={18} height={18} />
            </button>
          </div>

          <button type="button" className={styles.buy}>
            Comprar
          </button>
        </div>
      </div>
    </div>
  )
}
