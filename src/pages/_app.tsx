import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'
import GlobalStyle from '@/styles/global'
import { Moon_Dance } from '@next/font/google'
import { supabase } from "./api/supabase.js"

const moonDance = Moon_Dance({
  weight: '400',
  subsets: ['latin'],
  variable: '--font',
})
export default function App({ Component, pageProps }: AppProps) {
  return (
  <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <main className={moonDance.className}>
      <Component {...pageProps} />
    </main>
  </ThemeProvider>
  )
}
export async function getStaticProps() {
  const { data: usuarios } = await supabase.from("usuarios").select("*")
  const { data: campanhas } = await supabase.from("campanhas").select("*")
  const { data: personagens } = await supabase.from("personagens").select("*")
  return {
      props: {
          usuarios,
          campanhas,
          personagens 
      }
  }
}