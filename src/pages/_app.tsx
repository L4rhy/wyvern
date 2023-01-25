import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'
import GlobalStyle from '@/styles/global'
import { Roboto } from '@next/font/google'
import {Provider} from "react-redux"
import store from "../stack"
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle/>
        <main className={roboto.className}>
          <Component {...pageProps} />
        </main>
      </Provider>
    </ThemeProvider>
  )
}
