import type { Product, ProductsResponse } from '../types/product'

const REMOTE_URL =
  'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'

// Em dev o Vite faz proxy de /api (ver vite.config.ts) contornando o CORS.
const PRIMARY_URL = import.meta.env.DEV ? '/api/produtos.json' : REMOTE_URL
const FALLBACK_URL = '/produtos.json'

async function request(url: string, signal?: AbortSignal): Promise<Product[]> {
  const response = await fetch(url, { signal })
  if (!response.ok) {
    throw new Error(`Erro ${response.status} ao buscar produtos`)
  }
  const data: ProductsResponse = await response.json()
  if (!data.success || !Array.isArray(data.products)) {
    throw new Error('Resposta de produtos inválida')
  }
  return data.products
}

export async function fetchProducts(signal?: AbortSignal): Promise<Product[]> {
  try {
    return await request(PRIMARY_URL, signal)
  } catch (error) {
    if (signal?.aborted) throw error
    return request(FALLBACK_URL, signal)
  }
}
