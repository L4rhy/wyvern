import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'
import GlobalStyle from '@/styles/global'
import { Roboto } from '@next/font/google'
import UserProvider from "../context/userProvider"
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font',
})
export default function App({ Component, pageProps }: AppProps) {
  return (
  <UserProvider>  
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  </UserProvider>
  )
}
