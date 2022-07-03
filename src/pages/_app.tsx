import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import router from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('1058744178364766')
        ReactPixel.pageView()

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
  }, [router.events])
  
  return <Component {...pageProps} />
}

export default MyApp
