import { useState } from 'react'
import type { FormEvent } from 'react'
import styles from './Newsletter.module.scss'

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <section className={styles.newsletter} aria-labelledby="newsletter-title">
      <div className={styles.inner}>
        <div className={styles.heading}>
          <h2 id="newsletter-title" className={styles.title}>
            Inscreva-se na nossa newsletter
          </h2>
          <p className={styles.subtitle}>
            Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.fields}>
            <label htmlFor="newsletter-name" className="visually-hidden">
              Nome
            </label>
            <input id="newsletter-name" name="name" type="text" placeholder="Digite seu nome" required />

            <label htmlFor="newsletter-email" className="visually-hidden">
              E-mail
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              placeholder="Digite seu e-mail"
              required
            />

            <button type="submit" className={styles.submit}>
              Inscrever
            </button>
          </div>

          <label className={styles.terms}>
            <input type="checkbox" name="terms" required />
            Aceito os termos e condições
          </label>

          {submitted && (
            <p className={styles.success} role="status">
              Inscrição realizada com sucesso!
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
