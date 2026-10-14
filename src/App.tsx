import { useState } from 'react'
import { Brands } from './components/Brands/Brands'
import { Categories } from './components/Categories/Categories'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { HeroBanner } from './components/HeroBanner/HeroBanner'
import { Newsletter } from './components/Newsletter/Newsletter'
import { PartnerBanners } from './components/PartnerBanners/PartnerBanners'
import { ProductModal } from './components/ProductModal/ProductModal'
import { ProductShowcase } from './components/ProductShowcase/ProductShowcase'
import { useProducts } from './hooks/useProducts'
import type { Product } from './types/product'

function App() {
  const { products, loading, error } = useProducts()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const showcaseProps = {
    products,
    loading,
    error,
    onSelectProduct: setSelectedProduct,
  }

  return (
    <>
      <Header />

      <main>
        <HeroBanner />
        <Categories />
        <ProductShowcase id="vitrine" title="Produtos relacionados" showTabs {...showcaseProps} />
        <PartnerBanners />
        <ProductShowcase id="vitrine-2" title="Produtos relacionados" {...showcaseProps} />
        <PartnerBanners />
        <Brands />
        <ProductShowcase id="vitrine-3" title="Produtos relacionados" {...showcaseProps} />
      </main>

      <Newsletter />
      <Footer />

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  )
}

export default App
