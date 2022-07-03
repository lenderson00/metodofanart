import '../styles/globals.css'
import type { AppProps } from 'next/app'

import TagManager from 'react-gtm-module'
 
const tagManagerArgs = {
    gtmId: 'GTM-PPKCQR6'
}
 
TagManager.initialize(tagManagerArgs)

function MyApp({ Component, pageProps }: AppProps) {
 
  
  return <Component {...pageProps} />
}

export default MyApp
