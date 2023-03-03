import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Kurale } from '@next/font/google'

const kurale = Kurale({
  subsets: ['latin'],
  weight: ['400']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={kurale.className}>
      <Component {...pageProps} />
    </main>)
}
