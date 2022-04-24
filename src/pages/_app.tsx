import { AppProps } from 'next/app'
import '../../styles/globals.scss'
import '../../styles/colors.scss'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App