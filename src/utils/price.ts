const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

/** Formata um valor em centavos como moeda brasileira (R$ 1.499,90). */
export function formatPrice(cents: number): string {
  // Intl usa espaço não separável entre "R$" e o valor; trocamos por espaço comum.
  return currencyFormatter.format(cents / 100).replace(/ /g, ' ')
}

/**
 * O JSON não traz o preço "de". O layout exibe um preço riscado, então
 * mostramos um preço de referência ~10% maior para representar o desconto.
 */
export function getListPrice(cents: number): number {
  return Math.round((cents * 1.1) / 10) * 10
}

export const INSTALLMENTS = 2

export function getInstallmentValue(cents: number, installments = INSTALLMENTS): number {
  return Math.round(cents / installments)
}
